import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateProductDto } from '../dto/productDto';
import { ProductService } from '../services/product.service';

@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Get()
  async findAll() {
    return this.productService.getAllProducts();
  }

  @Get(':id')
  async findById(@Param('id') id: string) {
    return this.productService.getProductById(id);
  }

  @Post()
  async create(@Body() product: CreateProductDto) {
    return this.productService.createProduct(product);
  }
}
