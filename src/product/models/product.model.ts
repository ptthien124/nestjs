import { Document, Schema } from 'mongoose';

const ProductSchema = new Schema(
  { title: String, description: String },
  { timestamps: true, collection: 'products' },
);

export { ProductSchema };

export interface IProduct extends Document {
  title: string;
  description: string;
}
