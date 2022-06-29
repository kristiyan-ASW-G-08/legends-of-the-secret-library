import mongoose from 'mongoose';

import CommonChest from '@losl/common/source/types/Chest';
interface Item {
  _id: mongoose.Types.ObjectId;
  chance: number;
}

export default interface Chest extends CommonChest {
  lootTable: Item[];
}
