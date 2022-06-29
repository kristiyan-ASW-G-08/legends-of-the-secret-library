import getResource from '@src/services/getResource';
import StarterPackType from '@src/types/StarterPackType';
import StarterPackModel from './StarterPack';

const getPodcastById = async (podcastId: string): Promise<StarterPackType> =>
  getResource<StarterPackType>(
    StarterPackModel,
    { name: '_id', value: podcastId },
    '',
    new Error('Starter Pack was not found'),
  );

export default getPodcastById;
