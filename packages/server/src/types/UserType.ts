import mongoose, { Document } from 'mongoose';
import CommonUser from '@losl/common/source/types/User';
export default interface UserType extends CommonUser, Document {
  password: string;
  chests: mongoose.Types.ObjectId[];
  battlers: mongoose.Types.ObjectId[];
}
