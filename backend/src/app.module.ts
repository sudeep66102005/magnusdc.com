import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { HealthModule } from './modules/health/health.module';
import { AuthModule } from './modules/auth/auth.module';
import { SpecialtiesModule } from './modules/specialties/specialties.module';
import { DiagnosticsModule } from './modules/diagnostics/diagnostics.module';
import { LaboratoryModule } from './modules/laboratory/laboratory.module';
import { HealthPackagesModule } from './modules/health-packages/health-packages.module';
import { CorporatesModule } from './modules/corporates/corporates.module';
import { PatientsModule } from './modules/patients/patients.module';
import { ContactModule } from './modules/contact/contact.module';
import { AppointmentsModule } from './modules/appointments/appointments.module';
import { QueueModule } from './modules/queue/queue.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    HealthModule,
    AuthModule,
    SpecialtiesModule,
    DiagnosticsModule,
    LaboratoryModule,
    HealthPackagesModule,
    CorporatesModule,
    PatientsModule,
    ContactModule,
    QueueModule,
    AppointmentsModule,
  ],
})
export class AppModule {}
