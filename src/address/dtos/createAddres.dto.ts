import { IsInt, IsOptional, IsString } from 'class-validator';

export class CrteateAddressDto {
  @IsString()
  @IsOptional()
  complement: string;

  @IsInt()
  numberAddress: number;

  @IsString()
  cep: string;

  @IsInt()
  city_id: number;
}
