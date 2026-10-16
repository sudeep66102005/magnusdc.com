import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { JwtStrategy } from './strategies/jwt.strategy';
import { StaffGuard } from './guards/staff.guard';
import { tokenPolicy } from '../../security/config';
@Module({
  imports: [
    PassportModule,
    JwtModule.registerAsync({
      inject: [ConfigService],
      useFactory: (config: ConfigService) => ({
        secret: config.getOrThrow<string>('JWT_SECRET'),
        signOptions: { ...tokenPolicy, algorithm: 'HS256', expiresIn: '15m' },
        verifyOptions: { ...tokenPolicy, algorithms: ['HS256'] },
      }),
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService, JwtStrategy, StaffGuard],
  exports: [AuthService, JwtModule, StaffGuard],
})
export class AuthModule {}
