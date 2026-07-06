export type SupportTicketStatus = 'open' | 'in-progress' | 'resolved';

export class SupportTicket {
  id: string;
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  status: SupportTicketStatus;
  createdAt: string;
}
