import { AuthModule } from '../auth/auth.module';
import { Module } from '@nestjs/common';
import { QueueGateway } from './queue.gateway';

@Module({
  imports: [AuthModule],
  providers: [QueueGateway],
  exports: [QueueGateway],
})
export class QueueModule {}
