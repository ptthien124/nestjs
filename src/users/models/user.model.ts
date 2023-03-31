import { Schema, Document } from 'mongoose';

export const UserSchema = new Schema(
  {
    username: String,
    password: String,
    name: String,
    email: String,
  },
  { timestamps: true, collection: 'users' },
);

export interface User extends Document {
  username: string;
  password: string;
  name: string;
  email: string;
}
