import { Controller, Get, Param } from '@nestjs/common';
import { SpecialtiesService } from './specialties.service';

@Controller('specialties')
export class SpecialtiesController {
  constructor(private readonly specialtiesService: SpecialtiesService) {}

  @Get()
  findAll() {
    return this.specialtiesService.findAll();
  }

  @Get(':slug')
  findOne(@Param('slug') slug: string) {
    return this.specialtiesService.findBySlug(slug);
  }
}
