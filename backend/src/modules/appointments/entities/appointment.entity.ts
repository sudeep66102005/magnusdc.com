export type AppointmentStatus =
  'pending' | 'confirmed' | 'cancelled' | 'completed';

export class Appointment {
  id: string;
  patientName: string;
  phone: string;
  email?: string;
  department: string;
  preferredDate: string;
  preferredTime: string;
  notes?: string;
  status: AppointmentStatus;
  createdAt: string;
}
