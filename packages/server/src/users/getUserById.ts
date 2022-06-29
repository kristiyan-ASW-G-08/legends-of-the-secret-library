import getResource from '@src/services/getResource';
import UserType from '@src/types/UserType';
import UserModel from './UserModel';

const getPodcastById = async (podcastId: string): Promise<UserType> =>
  getResource<UserType>(
    UserModel,
    { name: '_id', value: podcastId },
    '',
    new Error('Starter Pack was not found'),
  );

export default getPodcastById;
