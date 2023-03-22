import { BaseRepository } from './../../base.repository';
import { Injectable } from '@nestjs/common';
import { IUser } from '../models/user.model';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class UserRepository extends BaseRepository<IUser> {
  constructor(
    @InjectModel('User')
    private readonly userModel: Model<IUser>,
  ) {
    super(userModel);
  }
}
