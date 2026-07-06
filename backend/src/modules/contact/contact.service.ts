import { Injectable } from '@nestjs/common';
import { randomUUID } from 'crypto';
import { CreateContactDto } from './dto/create-contact.dto';
import { ContactMessage } from './entities/contact-message.entity';

@Injectable()
export class ContactService {
  private readonly messages: ContactMessage[] = [];

  create(dto: CreateContactDto): ContactMessage {
    const message: ContactMessage = {
      id: randomUUID(),
      ...dto,
      createdAt: new Date().toISOString(),
    };
    this.messages.push(message);
    return message;
  }

  findAll(): ContactMessage[] {
    return this.messages;
  }
}
