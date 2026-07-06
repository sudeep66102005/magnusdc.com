import {
  ConnectedSocket,
  MessageBody,
  OnGatewayConnection,
  OnGatewayDisconnect,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';
import { QueueUpdateDto } from './dto/queue-update.dto';

/**
 * Live queue updates gateway. Frontend clients subscribe to a department
 * room to receive real-time token/queue position updates as appointments
 * are created and processed.
 */
@WebSocketGateway({
  namespace: 'queue',
  cors: {
    origin: process.env.CORS_ORIGIN?.split(',') ?? 'http://localhost:3000',
  },
})
export class QueueGateway implements OnGatewayConnection, OnGatewayDisconnect {
  @WebSocketServer()
  server: Server;

  handleConnection(client: Socket) {
    console.log(`Queue client connected: ${client.id}`);
  }

  handleDisconnect(client: Socket) {
    console.log(`Queue client disconnected: ${client.id}`);
  }

  @SubscribeMessage('joinDepartment')
  async joinDepartment(
    @ConnectedSocket() client: Socket,
    @MessageBody() department: string,
  ) {
    await client.join(department);
    return { joined: department };
  }

  emitQueueUpdate(update: QueueUpdateDto) {
    this.server?.to(update.department).emit('queueUpdate', update);
  }
}
