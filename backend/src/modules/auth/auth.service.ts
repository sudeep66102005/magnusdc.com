import { Injectable, UnauthorizedException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { scrypt, timingSafeEqual } from 'node:crypto';
import { promisify } from 'node:util';
import { LoginDto } from './dto/login.dto';
import { AuthenticatedUser } from './entities/authenticated-user.entity';
const derive = promisify(scrypt);
@Injectable()
export class AuthService {
  constructor(
    private readonly jwtService: JwtService,
    private readonly config: ConfigService,
  ) {}
  async login(dto: LoginDto) {
    const email = this.config.get<string>('ADMIN_EMAIL');
    const stored = this.config.get<string>('ADMIN_PASSWORD_HASH');
    // Derive even for an unknown account; no bundled/default account exists.
    const [, salt, encoded] = (
      stored ?? `scrypt$${'0'.repeat(32)}$${'0'.repeat(128)}`
    ).split('$');
    const actual = (await derive(dto.password, salt, 64)) as Buffer;
    const valid = timingSafeEqual(actual, Buffer.from(encoded, 'hex'));
    if (
      !email ||
      !stored ||
      dto.email.toLowerCase() !== email.toLowerCase() ||
      !valid
    ) {
      throw new UnauthorizedException('Invalid credentials');
    }
    const user = this.validateUserById('clinic-admin')!;
    return { accessToken: await this.jwtService.signAsync(user), user };
  }
  validateUserById(id: string): AuthenticatedUser | null {
    const email = this.config.get<string>('ADMIN_EMAIL');
    if (
      id !== 'clinic-admin' ||
      !email ||
      !this.config.get<string>('ADMIN_PASSWORD_HASH')
    )
      return null;
    return { id, email, role: 'admin' };
  }
}
