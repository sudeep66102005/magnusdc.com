import {
  ConnectedSocket,
  MessageBody,
  OnGatewayInit,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
  WsException,
} from '@nestjs/websockets';
import { JwtService } from '@nestjs/jwt';
import { Namespace, Socket } from 'socket.io';
type QueueData = {
  user?: AuthenticatedUser;
  joinWindow?: { start: number; count: number };
};
type QueueSocket = Socket & { data: QueueData };
import { AuthService } from '../auth/auth.service';
import { AuthenticatedUser } from '../auth/entities/authenticated-user.entity';
import { DEPARTMENTS } from '../../security/departments';
import { QueueUpdateDto } from './dto/queue-update.dto';
@WebSocketGateway({
  namespace: 'queue',
  maxHttpBufferSize: 4096,
  cors: { origin: false },
})
export class QueueGateway implements OnGatewayInit {
  @WebSocketServer() server: Namespace;
  constructor(
    private readonly jwt: JwtService,
    private readonly auth: AuthService,
  ) {}
  afterInit(server: Namespace) {
    server.use((socket, next) => {
      const client = socket as QueueSocket;
      void (async () => {
        try {
          const token: unknown = client.handshake.auth?.token;
          if (typeof token !== 'string' || token.length > 4096)
            throw new Error();
          const payload = await this.jwt.verifyAsync<AuthenticatedUser>(token);
          const user = this.auth.validateUserById(payload.id);
          if (!user || !['admin', 'staff'].includes(user.role))
            throw new Error();
          (client.data as QueueData).user = user;
          const expires = (payload as AuthenticatedUser & { exp?: number }).exp;
          if (!expires) throw new Error();
          const timeout = setTimeout(
            () => client.disconnect(true),
            Math.max(0, expires * 1000 - Date.now()),
          );
          timeout.unref();
          client.once('disconnect', () => clearTimeout(timeout));
          next();
        } catch {
          next(new Error('Unauthorized'));
        }
      })();
    });
  }
  @SubscribeMessage('joinDepartment')
  async joinDepartment(
    @ConnectedSocket() client: Socket,
    @MessageBody() department: unknown,
  ) {
    if (!(client.data as QueueData).user) throw new WsException('Unauthorized');
    if (
      typeof department !== 'string' ||
      !(DEPARTMENTS as readonly string[]).includes(department)
    )
      throw new WsException('Invalid department');
    const now = Date.now();
    const window = (client.data as QueueData).joinWindow;
    const state =
      window && now - window.start < 60000 ? window : { start: now, count: 0 };
    if (++state.count > 10) throw new WsException('Rate limit exceeded');
    (client.data as QueueData).joinWindow = state;
    for (const room of client.rooms)
      if (room !== client.id) await client.leave(room);
    await client.join(department);
    return { joined: department };
  }
  emitQueueUpdate(update: QueueUpdateDto) {
    this.server?.to(update.department).emit('queueUpdate', update);
  }
}
