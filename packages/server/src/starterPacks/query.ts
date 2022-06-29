import StarterPackType from '@src/types/StarterPackType';
import StarterPack from './StarterPack';

const queries = {
  starterPacks: async (): Promise<StarterPackType[]> => {
    return await StarterPack.find({}).populate({
      path: 'battlers',
      model: 'Battler',
    });
  },
};
export default queries;
