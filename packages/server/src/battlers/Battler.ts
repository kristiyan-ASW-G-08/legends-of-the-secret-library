import mongoose, { Schema } from 'mongoose';
import BattlerType from '@src/types/BattlerType';

const Effect: Schema = new Schema({
  type: { type: String },
  value: { type: Number },
  transformationStages: [
    {
      view: { type: String },
      health: { type: Number },
      attack: { type: Number },
    },
  ],
});

const Stats: Schema = new Schema({
  health: { type: Number },
  attack: { type: Number },
  effects: [Effect],
});
export const Battler: Schema = new Schema({
  name: { type: String, minlength: 1, maxlength: 50 },
  rarity: { type: String, minlength: 1, maxlength: 50 },
  archetype: { type: String, minlength: 1, maxlength: 50 },
  type: { type: String, minlength: 1, maxlength: 50 },
  card: { type: String, minlength: 1, maxlength: 50 },
  stats: Stats,
  bossStats: Stats,
  isForSale: { type: Boolean, default: false },
  priceGold: { type: Number, default: 0 },
  priceGems: { type: Number, default: 0 },
  attackSPrite: { type: String, default: 0 },
});

export default mongoose.model<BattlerType>('Battler', Battler);
