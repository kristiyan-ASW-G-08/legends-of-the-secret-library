import CommonChest from '@losl/common/source/types/Chest';
import Battler from '@losl/common/source/types/Battler';
import Gold from '@losl/common/source/types/Gold';
import Gem from '@losl/common/source/types/Gem';
interface Item {
  _id: Battler;
  chance: number;
}

export default interface Chest extends CommonChest {
  _id: string;
  lootTable: Item[];
}
