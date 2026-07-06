import { Injectable, NotFoundException } from '@nestjs/common';
import { LabTest } from './entities/lab-test.entity';

const SEED: LabTest[] = [
  {
    id: '1',
    slug: 'routine-pathology',
    name: 'Routine Pathology',
    summary:
      'Complete blood counts, urine, and stool analysis for everyday health checks.',
  },
  {
    id: '2',
    slug: 'biochemistry',
    name: 'Biochemistry',
    summary:
      'Blood chemistry panels including liver, kidney, lipid, and glucose profiles.',
  },
  {
    id: '3',
    slug: 'microbiology',
    name: 'Microbiology',
    summary:
      'Culture and sensitivity testing to identify infections and guide treatment.',
  },
  {
    id: '4',
    slug: 'hormonal-testing',
    name: 'Hormonal Testing',
    summary: 'Thyroid, reproductive, and metabolic hormone panels.',
  },
  {
    id: '5',
    slug: 'genetic-molecular-diagnostics',
    name: 'Genetic & Molecular Diagnostics',
    summary:
      'PCR-based and genetic screening for infectious and hereditary conditions.',
  },
  {
    id: '6',
    slug: 'preventive-testing',
    name: 'Preventive Testing',
    summary:
      'Screening panels designed for early detection and risk assessment.',
  },
  {
    id: '7',
    slug: 'home-sample-collection',
    name: 'Home Sample Collection',
    summary:
      'Convenient at-home phlebotomy service with reports delivered digitally.',
  },
];

@Injectable()
export class LaboratoryService {
  private readonly tests: LabTest[] = SEED;

  findAll(): LabTest[] {
    return this.tests;
  }

  findBySlug(slug: string): LabTest {
    const test = this.tests.find((item) => item.slug === slug);
    if (!test) {
      throw new NotFoundException(`Lab category "${slug}" not found`);
    }
    return test;
  }
}
