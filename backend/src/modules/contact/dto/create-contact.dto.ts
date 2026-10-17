import { IsOptional } from 'class-validator';
import { Transform } from 'class-transformer';
import { MaxLength, Matches } from 'class-validator';
import { IsEmail, IsString, MinLength } from 'class-validator';

export class CreateContactDto {
  @IsString()
  @MinLength(2)
  @MaxLength(100)
  name: string;

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

  @Transform(({ value }: { value: unknown }) =>
    value === '' ? undefined : value,
  )
  @IsOptional()
  @IsString()
  @MinLength(2)
  @MaxLength(100)
  subject?: string;

  @Transform(({ value }: { value: unknown }) =>
    value === '' ? undefined : value,
  )
  @IsOptional()
  @IsString()
  @MinLength(10)
  @MaxLength(2000)
  message?: string;
}
