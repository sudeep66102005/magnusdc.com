import { Transform } from 'class-transformer';
import { MaxLength, Matches, Max } from 'class-validator';
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
  @Transform(({ value }: { value: unknown }) =>
    value === '' ? undefined : value,
  )
  @IsOptional()
  @IsString()
  @MinLength(2)
  @MaxLength(100)
  companyName?: string;

  @IsString()
  @MinLength(2)
  @MaxLength(100)
  contactPerson: string;

  @Transform(({ value }: { value: unknown }) =>
    value === '' ? undefined : value,
  )
  @IsOptional()
  @IsEmail()
  @MaxLength(254)
  email?: string;

  @IsString()
  @Matches(/^(?=(?:\D*\d){8,15}\D*$)\+?[0-9][0-9 ()-]*[0-9]$/)
  @MaxLength(25)
  phone: string;

  @IsOptional()
  @Type(() => Number)
  @IsInt()
  @Min(1)
  @Max(100000)
  employeeCount?: number;

  @Transform(({ value }: { value: unknown }) =>
    value === '' ? undefined : value,
  )
  @IsOptional()
  @IsString()
  @MinLength(10)
  @MaxLength(2000)
  message?: string;
}
