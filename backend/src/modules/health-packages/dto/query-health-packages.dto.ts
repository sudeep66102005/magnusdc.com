import { IsIn, IsOptional } from 'class-validator';
import type { HealthPackageCategory } from '../entities/health-package.entity';

const CATEGORIES: HealthPackageCategory[] = [
  'checkup',
  'womens-health',
  'corporate-health',
];

export class QueryHealthPackagesDto {
  @IsOptional()
  @IsIn(CATEGORIES)
  category?: HealthPackageCategory;
}
