import Battler from './Battler';
import Gold from './Gold';
import rarity from './Rarity';

export default interface Chest {
  name: string;
  rarity: rarity;
  frontView: string;
}
