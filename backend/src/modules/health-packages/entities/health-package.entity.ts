export type HealthPackageCategory =
  'checkup' | 'womens-health' | 'corporate-health';

export class HealthPackage {
  id: string;
  slug: string;
  name: string;
  category: HealthPackageCategory;
  price: number;
  currency: string;
  testsIncluded: string[];
  summary?: string;
}
