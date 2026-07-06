import { Injectable } from '@nestjs/common';
import { randomUUID } from 'crypto';
import { CreateSupportTicketDto } from './dto/create-support-ticket.dto';
import { SupportTicket } from './entities/support-ticket.entity';

@Injectable()
export class PatientsService {
  private readonly tickets: SupportTicket[] = [];

  createSupportTicket(dto: CreateSupportTicketDto): SupportTicket {
    const ticket: SupportTicket = {
      id: randomUUID(),
      ...dto,
      status: 'open',
      createdAt: new Date().toISOString(),
    };
    this.tickets.push(ticket);
    return ticket;
  }

  findAll(): SupportTicket[] {
    return this.tickets;
  }
}
