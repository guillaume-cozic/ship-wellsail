import { IsEmail, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class FreightTransportRequestDto {
  @IsString()
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsString()
  @IsNotEmpty()
  content: string;

  @IsNumber()
  @IsNotEmpty()
  shipId: number;
}
