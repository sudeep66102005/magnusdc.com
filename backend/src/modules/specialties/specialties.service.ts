import { Injectable, NotFoundException } from '@nestjs/common';
import { Specialty } from './entities/specialty.entity';

/**
 * In-memory seed data. Replace with a database-backed repository
 * (e.g. TypeORM/Prisma) once a database is introduced.
 */
const SPECIALTY_NAMES = [
  'Physician / Internal Medicine',
  'Orthopedics',
  'Cardiology',
  'Physiotherapy',
  'Gynecology & Obstetrics',
  'Neurology',
  'General Surgery',
  'Neurosurgery',
  'Medical Gastroenterology',
  'Surgical Gastroenterology',
  'ENT',
  'Diabetology',
  'Dermatology',
  'Urology',
  'Nephrology',
  'Oncology',
  'Pulmonology',
  'Pediatrics',
  'Endocrinology',
];

function toSlug(name: string): string {
  return name
    .toLowerCase()
    .replace(/&/g, 'and')
    .replace(/\//g, '-')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}

const SEED: Specialty[] = SPECIALTY_NAMES.map((name, index) => ({
  id: String(index + 1),
  slug: toSlug(name),
  name,
  summary: `Expert ${name.toLowerCase()} care from experienced specialists.`,
}));

@Injectable()
export class SpecialtiesService {
  private readonly specialties: Specialty[] = SEED;

  findAll(): Specialty[] {
    return this.specialties;
  }

  findBySlug(slug: string): Specialty {
    const specialty = this.specialties.find((item) => item.slug === slug);
    if (!specialty) {
      throw new NotFoundException(`Specialty "${slug}" not found`);
    }
    return specialty;
  }
}
