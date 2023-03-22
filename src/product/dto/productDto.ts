import { IsNotEmpty } from 'class-validator';

export class CreateProductDto {
  @IsNotEmpty()
  title: string;
  description: string;
}

export class UpdateProductDto {
  @IsNotEmpty()
  id: string;
  @IsNotEmpty()
  title: string;
  description: string;
}
