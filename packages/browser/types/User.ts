import CommonUser from '@losl/common/source/types/User'
import Battler from './Battler';
import Chest from './Chest';
export  default interface User extends CommonUser {
    _id: string;
    token: string;
    battlers:Battler[]
    chests:Chest[]
  }
  