import { Injectable, NotFoundException } from '@nestjs/common';
import {
  HealthPackage,
  HealthPackageCategory,
} from './entities/health-package.entity';

const SEED: HealthPackage[] = [
  {
    id: '1',
    slug: 'essential-health-checkup',
    name: 'Essential Health Checkup',
    category: 'checkup',
    price: 1499,
    currency: 'INR',
    testsIncluded: [
      'CBC',
      'Lipid Profile',
      'Blood Sugar (Fasting)',
      'Liver Function',
      'Kidney Function',
    ],
  },
  {
    id: '2',
    slug: 'comprehensive-health-checkup',
    name: 'Comprehensive Health Checkup',
    category: 'checkup',
    price: 3499,
    currency: 'INR',
    testsIncluded: [
      'CBC',
      'Lipid Profile',
      'Thyroid Panel',
      'HbA1c',
      'Vitamin D & B12',
      'Chest X-ray',
      'ECG',
    ],
  },
  {
    id: '3',
    slug: 'womens-wellness-package',
    name: "Women's Wellness Package",
    category: 'womens-health',
    price: 2999,
    currency: 'INR',
    testsIncluded: [
      'CBC',
      'Thyroid Panel',
      'Pap Smear',
      'Pelvic Ultrasound',
      'Iron Studies',
      'Vitamin D',
    ],
  },
  {
    id: '4',
    slug: 'prenatal-care-package',
    name: 'Prenatal Care Package',
    category: 'womens-health',
    price: 4499,
    currency: 'INR',
    testsIncluded: [
      'Double Marker',
      'Anomaly Scan',
      'OGTT',
      'CBC',
      'Blood Group & Rh',
    ],
  },
  {
    id: '5',
    slug: 'corporate-basic-package',
    name: 'Corporate Basic Package',
    category: 'corporate-health',
    price: 999,
    currency: 'INR',
    testsIncluded: ['CBC', 'Blood Sugar', 'BP Check', 'BMI Assessment'],
  },
  {
    id: '6',
    slug: 'corporate-executive-package',
    name: 'Corporate Executive Package',
    category: 'corporate-health',
    price: 4999,
    currency: 'INR',
    testsIncluded: [
      'Full Body Checkup',
      'Cardiac Risk Markers',
      'Stress ECG',
      'Executive Health Consultation',
    ],
  },
];

@Injectable()
export class HealthPackagesService {
  private readonly packages: HealthPackage[] = SEED;

  findAll(category?: HealthPackageCategory): HealthPackage[] {
    if (!category) return this.packages;
    return this.packages.filter((pkg) => pkg.category === category);
  }

  findBySlug(slug: string): HealthPackage {
    const pkg = this.packages.find((item) => item.slug === slug);
    if (!pkg) {
      throw new NotFoundException(`Health package "${slug}" not found`);
    }
    return pkg;
  }
}
