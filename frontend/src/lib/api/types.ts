export interface Specialty {
  id: string;
  slug: string;
  name: string;
  summary: string;
  description?: string;
  heroImage?: string;
}

export interface DiagnosticService {
  id: string;
  slug: string;
  name: string;
  category: string;
  summary: string;
  turnaroundTime?: string;
  preparationInstructions?: string;
}

export interface LabTest {
  id: string;
  slug: string;
  name: string;
  category: string;
  summary: string;
  fastingRequired?: boolean;
  reportTime?: string;
}

export interface HealthPackage {
  id: string;
  slug: string;
  name: string;
  category: "checkup" | "womens-health" | "corporate-health";
  price: number;
  currency: string;
  testsIncluded: string[];
  description?: string;
}

export interface AppointmentRequest {
  patientName: string;
  phone: string;
  email?: string;
  department: string;
  preferredDate: string;
  preferredTime: string;
  notes?: string;
}

export interface Appointment extends AppointmentRequest {
  id: string;
  status: "pending" | "confirmed" | "cancelled" | "completed";
  createdAt: string;
}

export interface ContactRequest {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

export interface CorporateInquiryRequest {
  companyName: string;
  contactPerson: string;
  email: string;
  phone: string;
  employeeCount?: number;
  message: string;
}

export interface QueueUpdate {
  department: string;
  currentToken: number;
  estimatedWaitMinutes: number;
}
