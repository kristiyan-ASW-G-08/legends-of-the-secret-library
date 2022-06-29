import rarity from './Rarity';
import Stats from './Stats';
import battlerType from './Type';

export default interface Battler {
  name: string;
  rarity: rarity;
  archetype: string;
  type: battlerType;
  card: string;
  stats: Stats;
  bossStats: Stats;
  isForSale: boolean;
  priceGold?: number;
  priceGems?: number;
  attackSprite:string
}
