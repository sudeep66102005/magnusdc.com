import { Type } from 'class-transformer';
import { IsInt, Max, Min } from 'class-validator';
export class ListAppointmentsDto {
  @Type(() => Number) @IsInt() @Min(0) @Max(10000) offset = 0;
}
