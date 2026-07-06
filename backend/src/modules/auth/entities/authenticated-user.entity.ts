export type UserRole = 'admin' | 'staff' | 'patient';

export class AuthenticatedUser {
  id: string;
  email: string;
  role: UserRole;
}
