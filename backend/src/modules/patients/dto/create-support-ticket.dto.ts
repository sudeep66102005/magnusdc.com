import { MaxLength, Matches } from 'class-validator';
import { IsEmail, IsString, MinLength } from 'class-validator';

export class CreateSupportTicketDto {
  @IsString()
  @MinLength(2)
  @MaxLength(100)
  name: string;

  @IsEmail()
  @MaxLength(254)
  email: string;

  @IsString()
  @Matches(/^(?=(?:\D*\d){8,15}\D*$)\+?[0-9][0-9 ()-]*[0-9]$/)
  @MaxLength(25)
  phone: string;

  @IsString()
  @MinLength(2)
  @MaxLength(100)
  subject: string;

  @IsString()
  @MinLength(10)
  @MaxLength(2000)
  message: string;
}
