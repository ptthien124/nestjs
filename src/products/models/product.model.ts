import { Schema, Document } from 'mongoose';

const ProductSchema = new Schema(
  {
    title: String,
  },
  {
    timestamps: true,
    collection: 'Product',
  },
);

export { ProductSchema };

export interface Product extends Document {
  title: string;
}
