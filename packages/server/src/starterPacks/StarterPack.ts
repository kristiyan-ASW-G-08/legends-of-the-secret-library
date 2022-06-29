import mongoose, { Schema } from 'mongoose';
import StarterPackType from '@src/types/StarterPackType';
const StarterPack: Schema = new Schema({
  archetype: { type: String, minlength: 1, maxlength: 50 },
  battlers: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Battler',
    },
  ],
});

export default mongoose.model<StarterPackType>('Starter', StarterPack);
