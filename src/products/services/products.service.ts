import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateProductDto } from '../dtos/products.dto';
import { ProductRepository } from '../repositories/post.repository';

@Injectable()
export class ProductsService {
  constructor(private readonly productRepository: ProductRepository) {}

  getAllProducts() {
    return this.productRepository.find({});
  }

  getProductById(id: number) {
    const product = this.products.find((product) => product.id === id);
    if (product) return product;
    throw new HttpException('Not found', HttpStatus.NOT_FOUND);
  }

  createProduct(product: CreateProductDto) {
    this.products.push({ ...product, id: this.products.length });
    return product;
  }

  updateProduct(id: number, product) {
    const productIndex = this.products.findIndex((prod) => prod.id === id);
    if (~productIndex) {
      this.products[productIndex] = {
        ...this.products[productIndex],
        ...product,
      };
      return { message: 'OK' };
    }
    throw new HttpException('Not found', HttpStatus.NOT_FOUND);
  }

  deleteProduct(id: number) {
    const productIndex = this.products.findIndex((prod) => prod.id === id);
    if (~productIndex) {
      this.products.splice(productIndex, 1);
      return { message: 'OK' };
    }
    throw new HttpException('Not found', HttpStatus.NOT_FOUND);
  }
}
