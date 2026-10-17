import { RecordsService } from '../../storage/records.service';
import { Injectable, NotFoundException } from '@nestjs/common';
import { randomUUID } from 'crypto';
import { CreateAppointmentDto } from './dto/create-appointment.dto';
import { Appointment } from './entities/appointment.entity';
import { QueueGateway } from '../queue/queue.gateway';

@Injectable()
export class AppointmentsService {
  constructor(
    private readonly queueGateway: QueueGateway,
    private readonly records: RecordsService,
  ) {}

  create(dto: CreateAppointmentDto): Appointment {
    const appointment: Appointment = {
      id: randomUUID(),
      ...dto,
      department: dto.department ?? 'general',
      status: 'pending',
      createdAt: new Date().toISOString(),
    };

    this.records.insert('appointment', appointment);

    // Notify connected clients (e.g. live queue displays) of the new booking.
    this.queueGateway.emitQueueUpdate({
      department: appointment.department,
      currentToken: this.countByDepartment(appointment.department),
      estimatedWaitMinutes: 10,
    });

    return appointment;
  }

  findAll(offset = 0): Appointment[] {
    return this.records.list('appointment', offset);
  }

  findOne(id: string): Appointment {
    const appointment = this.records.get<Appointment>('appointment', id);
    if (!appointment) {
      throw new NotFoundException(`Appointment "${id}" not found`);
    }
    return appointment;
  }

  private countByDepartment(department: string): number {
    return this.records.count('appointment', department);
  }
}
