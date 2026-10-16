import {
  IsEmail,
  IsIn,
  IsISO8601,
  IsOptional,
  IsString,
  Matches,
  MaxLength,
  MinLength,
} from 'class-validator';
import { Transform } from 'class-transformer';
import { DEPARTMENTS } from '../../../security/departments';
const emptyToUndefined = ({ value }: { value: unknown }) =>
  value === '' ? undefined : value;
export class CreateAppointmentDto {
  @IsString() @MinLength(2) @MaxLength(100) patientName: string;
  @IsString()
  @Matches(/^(?=(?:\D*\d){8,15}\D*$)\+?[0-9][0-9 ()-]*[0-9]$/)
  @MaxLength(25)
  phone: string;
  @Transform(emptyToUndefined)
  @IsOptional()
  @IsEmail()
  @MaxLength(254)
  email?: string;
  @Transform(emptyToUndefined)
  @IsOptional()
  @IsIn(DEPARTMENTS)
  department?: string;
  @Transform(emptyToUndefined)
  @IsOptional()
  @Matches(/^\d{4}-\d{2}-\d{2}$/)
  @IsISO8601({ strict: true })
  preferredDate?: string;
  @Transform(emptyToUndefined)
  @IsOptional()
  @Matches(/^([01]\d|2[0-3]):[0-5]\d$/)
  preferredTime?: string;
  @IsOptional() @IsString() @MaxLength(2000) notes?: string;
}
