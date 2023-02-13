import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { BaseRepository } from 'src/base.repository';
import { Product } from '../models/product.model';

@Injectable()
export class ProductRepository extends BaseRepository<Product> {
  constructor(
    @InjectModel('Product')
    private readonly productModel: Model<Product>,
  ) {
    super(productModel);
  }
}
