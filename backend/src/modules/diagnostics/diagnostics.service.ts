import { Injectable, NotFoundException } from '@nestjs/common';
import { DiagnosticService as DiagnosticServiceEntity } from './entities/diagnostic-service.entity';

const SEED: DiagnosticServiceEntity[] = [
  {
    id: '1',
    slug: 'mri',
    name: 'MRI (3T MRI)',
    summary:
      'High-resolution 3-Tesla magnetic resonance imaging for detailed soft-tissue diagnostics.',
    preparation:
      'Remove metallic objects. Inform staff of implants or pacemakers before the scan.',
  },
  {
    id: '2',
    slug: 'ct-scan',
    name: 'CT Scan',
    summary:
      'Fast, detailed cross-sectional imaging for trauma, cancer, and internal organ evaluation.',
  },
  {
    id: '3',
    slug: 'ultrasound',
    name: 'Ultrasound',
    summary:
      'Real-time imaging for abdominal, pelvic, obstetric, and soft-tissue assessment.',
  },
  {
    id: '4',
    slug: 'doppler',
    name: 'Doppler',
    summary:
      'Vascular flow studies to assess blood circulation and detect clots or blockages.',
  },
  {
    id: '5',
    slug: 'x-ray',
    name: 'X-ray',
    summary:
      'Quick digital radiography for bones, chest, and general diagnostic screening.',
  },
  {
    id: '6',
    slug: 'fetal-medicine-pregnancy-scans',
    name: 'Fetal Medicine & Pregnancy Scans',
    summary:
      'Comprehensive prenatal imaging including anomaly and growth scans.',
  },
  {
    id: '7',
    slug: 'fibroscan',
    name: 'Fibroscan',
    summary:
      'Non-invasive liver stiffness and fat assessment for liver health screening.',
  },
  {
    id: '8',
    slug: 'advanced-procedures',
    name: 'Advanced Procedures (EEG, ENMG, etc.)',
    summary:
      'Specialized neuro-diagnostic testing including EEG and nerve conduction studies.',
  },
];

@Injectable()
export class DiagnosticsService {
  private readonly services: DiagnosticServiceEntity[] = SEED;

  findAll(): DiagnosticServiceEntity[] {
    return this.services;
  }

  findBySlug(slug: string): DiagnosticServiceEntity {
    const service = this.services.find((item) => item.slug === slug);
    if (!service) {
      throw new NotFoundException(`Diagnostic service "${slug}" not found`);
    }
    return service;
  }
}
