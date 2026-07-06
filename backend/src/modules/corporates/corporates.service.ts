import { Injectable } from '@nestjs/common';
import { randomUUID } from 'crypto';
import { CreateCorporateInquiryDto } from './dto/create-corporate-inquiry.dto';
import { CorporateInquiry } from './entities/corporate-inquiry.entity';

@Injectable()
export class CorporatesService {
  private readonly inquiries: CorporateInquiry[] = [];

  createInquiry(dto: CreateCorporateInquiryDto): CorporateInquiry {
    const inquiry: CorporateInquiry = {
      id: randomUUID(),
      ...dto,
      createdAt: new Date().toISOString(),
    };
    this.inquiries.push(inquiry);
    // TODO: notify corporate care team (email/CRM integration) once available.
    return inquiry;
  }

  findAll(): CorporateInquiry[] {
    return this.inquiries;
  }
}
