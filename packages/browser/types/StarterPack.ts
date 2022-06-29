import CommonStarterPack from '@losl/common/source/types/StarterPack';
import Battler from './Battler';
export default interface StarterPack extends CommonStarterPack, Document {
  battlers: Battler[];
  _id: string;
}
