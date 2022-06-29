import mongoose, { Document } from 'mongoose';
import CommonStarterPack from '@losl/common/source/types/StarterPack';
export default interface StarterPack extends CommonStarterPack, Document {
  battlers: mongoose.Types.ObjectId[];
}
