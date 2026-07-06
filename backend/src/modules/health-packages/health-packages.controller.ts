import { Controller, Get, Param, Query } from '@nestjs/common';
import { HealthPackagesService } from './health-packages.service';
import { QueryHealthPackagesDto } from './dto/query-health-packages.dto';

@Controller('health-packages')
export class HealthPackagesController {
  constructor(private readonly healthPackagesService: HealthPackagesService) {}

  @Get()
  findAll(@Query() query: QueryHealthPackagesDto) {
    return this.healthPackagesService.findAll(query.category);
  }

  @Get(':slug')
  findOne(@Param('slug') slug: string) {
    return this.healthPackagesService.findBySlug(slug);
  }
}
