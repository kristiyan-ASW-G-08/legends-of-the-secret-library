import UserModel from '@src/users/UserModel';
import UserType from '@customTypes/UserType';
import { UserInputError } from 'apollo-server-express';
import getResource from '../services/getResource';

const getUserByEmail = async (email: string): Promise<UserType> =>
  getResource<UserType>(
    UserModel,
    { name: 'email', value: email },
    '',
  );
export default getUserByEmail;
