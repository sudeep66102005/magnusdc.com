import { AuthModule } from '../auth/auth.module';
import { Module } from '@nestjs/common';
import { AppointmentsController } from './appointments.controller';
import { AppointmentsService } from './appointments.service';
import { QueueModule } from '../queue/queue.module';

@Module({
  imports: [QueueModule, AuthModule],
  controllers: [AppointmentsController],
  providers: [AppointmentsService],
  exports: [AppointmentsService],
})
export class AppointmentsModule {}
