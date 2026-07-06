import { Injectable, NotFoundException } from '@nestjs/common';
import { randomUUID } from 'crypto';
import { CreateAppointmentDto } from './dto/create-appointment.dto';
import { Appointment } from './entities/appointment.entity';
import { QueueGateway } from '../queue/queue.gateway';

@Injectable()
export class AppointmentsService {
  private readonly appointments: Appointment[] = [];

  constructor(private readonly queueGateway: QueueGateway) {}

  create(dto: CreateAppointmentDto): Appointment {
    const appointment: Appointment = {
      id: randomUUID(),
      ...dto,
      status: 'pending',
      createdAt: new Date().toISOString(),
    };

    this.appointments.push(appointment);

    // Notify connected clients (e.g. live queue displays) of the new booking.
    this.queueGateway.emitQueueUpdate({
      department: appointment.department,
      currentToken: this.countByDepartment(appointment.department),
      estimatedWaitMinutes: 10,
    });

    return appointment;
  }

  findAll(): Appointment[] {
    return this.appointments;
  }

  findOne(id: string): Appointment {
    const appointment = this.appointments.find((item) => item.id === id);
    if (!appointment) {
      throw new NotFoundException(`Appointment "${id}" not found`);
    }
    return appointment;
  }

  private countByDepartment(department: string): number {
    return this.appointments.filter((item) => item.department === department)
      .length;
  }
}
