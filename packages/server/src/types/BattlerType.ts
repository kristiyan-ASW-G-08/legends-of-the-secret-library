import mongoose, { Document } from 'mongoose';
import CommonBattler from '@losl/common/source/types/Battler';
export default interface BattlerType extends CommonBattler, Document {
  _id: mongoose.Types.ObjectId;
}
