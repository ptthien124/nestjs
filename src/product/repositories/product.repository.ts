import { BaseRepository } from './../../base.repository';
import { Injectable } from '@nestjs/common';
import { IProduct } from '../models/product.model';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class ProductRepository extends BaseRepository<IProduct> {
  constructor(
    @InjectModel('Product')
    private readonly productModel: Model<IProduct>,
  ) {
    super(productModel);
  }
}
