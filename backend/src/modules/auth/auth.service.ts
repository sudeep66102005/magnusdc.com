import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { LoginDto } from './dto/login.dto';
import { AuthenticatedUser } from './entities/authenticated-user.entity';

/**
 * Placeholder user store. Replace with a real user repository backed by a
 * database once persistence is introduced. Do not use in production as-is.
 */
const PLACEHOLDER_USERS: Array<AuthenticatedUser & { password: string }> = [
  {
    id: '1',
    email: 'admin@magnusdc.com',
    password: 'ChangeMe123!',
    role: 'admin',
  },
];

@Injectable()
export class AuthService {
  constructor(private readonly jwtService: JwtService) {}

  async login(dto: LoginDto) {
    const user = PLACEHOLDER_USERS.find((item) => item.email === dto.email);
    if (!user || user.password !== dto.password) {
      throw new UnauthorizedException('Invalid credentials');
    }

    const payload: AuthenticatedUser = {
      id: user.id,
      email: user.email,
      role: user.role,
    };

    return {
      accessToken: await this.jwtService.signAsync(payload),
      user: payload,
    };
  }

  validateUserById(id: string): AuthenticatedUser | null {
    const user = PLACEHOLDER_USERS.find((item) => item.id === id);
    if (!user) return null;
    return { id: user.id, email: user.email, role: user.role };
  }
}
