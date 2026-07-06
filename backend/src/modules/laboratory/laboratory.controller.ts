import { Controller, Get, Param } from '@nestjs/common';
import { LaboratoryService } from './laboratory.service';

@Controller('laboratory')
export class LaboratoryController {
  constructor(private readonly laboratoryService: LaboratoryService) {}

  @Get()
  findAll() {
    return this.laboratoryService.findAll();
  }

  @Get(':slug')
  findOne(@Param('slug') slug: string) {
    return this.laboratoryService.findBySlug(slug);
  }
}
