import { Body, Controller, Post } from '@nestjs/common';
import { CorporatesService } from './corporates.service';
import { CreateCorporateInquiryDto } from './dto/create-corporate-inquiry.dto';

@Controller('corporates')
export class CorporatesController {
  constructor(private readonly corporatesService: CorporatesService) {}

  @Post('inquiry')
  createInquiry(@Body() dto: CreateCorporateInquiryDto) {
    return this.corporatesService.createInquiry(dto);
  }
}
