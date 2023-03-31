import { Injectable, NotFoundException, HttpStatus } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateUserDto, UpdateUserDto } from './dto/user.dto';
import { User } from './models/user.model';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  constructor(@InjectModel('User') private userModel: Model<User>) {}

  async create(createUserDto: CreateUserDto): Promise<User> {
    try {
      const salt = await bcrypt.genSalt();
      const password = await bcrypt.hash(createUserDto.password, salt);
      const createdCat = new this.userModel({
        ...createUserDto,
        password,
      });
      return createdCat.save();
    } catch (e) {
      throw new Error(e.message);
    }
  }

  async update(id: string, updateUserDto: UpdateUserDto): Promise<any> {
    const user = this.userModel.findById(id);
    if (!user) {
      throw new NotFoundException();
    }
    try {
      await this.userModel.updateOne({ _id: id }, updateUserDto);
      return { status: HttpStatus.OK, message: 'Success' };
    } catch (e) {
      throw new Error(e.message);
    }
  }

  async findOne(username: string): Promise<User> {
    return this.userModel.findOne({ username: username });
  }

  async findById(id: string): Promise<User> {
    const query = await this.userModel.findById(id, ['-password', '-__v']);
    if (!query) {
      throw new NotFoundException();
    }
    const { _id, ...user } = query.toObject();
    return { id: _id, ...user } as User;
  }
}
