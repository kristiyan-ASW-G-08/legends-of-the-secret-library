import mongoose, { Schema } from 'mongoose';
import UserType from '@customTypes/UserType';
import duplicationErrorHandler from '@customUtilities/duplicationErrorHandler';
import uniqueValidator from 'mongoose-unique-validator';

const UserSchema: Schema = new Schema({
  username: { type: String, minlength: 1, maxlength: 50, unique: true },
  email: { type: String, unique: true },
  password: { type: String, minlength: 8 },
  level: { type: Number, default: 0 },
  xp: { type: Number, default: 0 },
  gold: { type: Number, default: 0 },
  gems: {
    common: { type: Number, default: 0 },
    uncommon: { type: Number, default: 0 },
    rare: { type: Number, default: 0 },
    super: { type: Number, default: 0 },
    secret: { type: Number, default: 0 },
    mythic: { type: Number, default: 0 },
  },
  chests: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Chest',
    },
  ],
  battlers: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Battler',
    },
  ],
  completedLevels: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Level',
    },
  ],
  completedStages: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Stage',
    },
  ],
  hasSelectedStarters: {
    type: Boolean,
    default: false,
  },
});

UserSchema.plugin(uniqueValidator);
// @ts-ignore
UserSchema.post('save', duplicationErrorHandler);
// @ts-ignore
UserSchema.post('update', duplicationErrorHandler);

export default mongoose.model<UserType>('User', UserSchema);
