import {
  IsEmail,
  IsInt,
  IsOptional,
  IsString,
  MinLength,
  Min,
} from 'class-validator';
import { Type } from 'class-transformer';

export class CreateCorporateInquiryDto {
  @IsString()
  @MinLength(2)
  companyName: string;

  @IsString()
  @MinLength(2)
  contactPerson: string;

  @IsEmail()
  email: string;

  @IsString()
  @MinLength(8)
  phone: string;

  @IsOptional()
  @Type(() => Number)
  @IsInt()
  @Min(1)
  employeeCount?: number;

  @IsString()
  @MinLength(10)
  message: string;
}
