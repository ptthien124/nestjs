import { ProductRepository } from './repositories/product.repository';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductController } from './controllers/product.controller';
import { Module } from '@nestjs/common';
import { ProductService } from './services/product.service';
import { ProductSchema } from './models/product.model';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Product', schema: ProductSchema }]),
  ],
  controllers: [ProductController],
  providers: [ProductService, ProductRepository],
})
export class ProductModule {}
