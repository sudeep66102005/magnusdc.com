import { Controller, Get, Param } from '@nestjs/common';
import { DiagnosticsService } from './diagnostics.service';

@Controller('diagnostics')
export class DiagnosticsController {
  constructor(private readonly diagnosticsService: DiagnosticsService) {}

  @Get()
  findAll() {
    return this.diagnosticsService.findAll();
  }

  @Get(':slug')
  findOne(@Param('slug') slug: string) {
    return this.diagnosticsService.findBySlug(slug);
  }
}
