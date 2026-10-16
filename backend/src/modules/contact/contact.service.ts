import { RecordsService } from '../../storage/records.service';
import { Injectable } from '@nestjs/common';
import { randomUUID } from 'crypto';
import { CreateContactDto } from './dto/create-contact.dto';
import { ContactMessage } from './entities/contact-message.entity';

@Injectable()
export class ContactService {
  constructor(private readonly records: RecordsService) {}

  create(dto: CreateContactDto): ContactMessage {
    const message: ContactMessage = {
      id: randomUUID(),
      ...dto,
      createdAt: new Date().toISOString(),
    };
    this.records.insert('contact', message);
    return message;
  }

  findAll(): ContactMessage[] {
    return this.records.list('contact');
  }
}
