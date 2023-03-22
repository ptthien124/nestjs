import { Document, Schema } from 'mongoose';

const UserSchema = new Schema(
  { name: String, email: String, password: String },
  { timestamps: true, collection: 'Users' },
);

export { UserSchema };

export interface IUser extends Document {
  name: string;
  email: string;
  password: string;
}
