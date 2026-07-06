import { Body, Controller, Post } from '@nestjs/common';
import { PatientsService } from './patients.service';
import { CreateSupportTicketDto } from './dto/create-support-ticket.dto';

@Controller('patients')
export class PatientsController {
  constructor(private readonly patientsService: PatientsService) {}

  @Post('support')
  createSupportTicket(@Body() dto: CreateSupportTicketDto) {
    return this.patientsService.createSupportTicket(dto);
  }
}
