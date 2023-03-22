import { CreateProductDto, UpdateProductDto } from './../dto/productDto';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { ProductRepository } from './../repositories/product.repository';

@Injectable()
export class ProductService {
  constructor(private readonly productRepository: ProductRepository) {}

  async getAllProducts() {
    return this.productRepository.getByCondition({});
  }

  async getProductById(id: string) {
    const product = this.productRepository.findById(id);
    if (product) return product;
    throw new HttpException('Product not found', HttpStatus.NOT_FOUND);
  }

  async createProduct(product: CreateProductDto) {
    return await this.productRepository.create(product);
  }

  async updateProduct(product: UpdateProductDto) {
    return await this.productRepository.updateOne(product);
  }
}
