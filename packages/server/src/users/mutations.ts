import CreateUserDto from '@users/createUserDto';
import UserType from '@customTypes/UserType';
import validationHandler from '@customUtilities/validationHandler';
import UserSignUpValidator from '@losl/common/source/schemaValidators/UserSignUpValidator';
import UserLoginValidator from '@losl/common/source/schemaValidators/UserLoginValidator';
import createUser from '@users/createUser';
import LoginUserDTO from '@users/loginUserDto';
import getUserByEmail from '@users/getUserByEmail';
import loginUser from './loginUser';
import authorizationHandler from '@src/utilities/authorizationHandler';
import getStarterPackById from '@src/starterPacks/getStarterPackById';
import getUserById from './getUserById';

const mutation = {
  signup: async (_: any, args: CreateUserDto): Promise<UserType> => {
    await validationHandler(args, UserSignUpValidator);
    return createUser(args);
  },
  login: async (_: any, { email, password }: LoginUserDTO): Promise<any> => {
    const { SECRET } = process.env;
    await validationHandler({ email, password }, UserLoginValidator);
    const user = (await getUserByEmail(email)).populate('chests battlers');
    console.log(await loginUser(user, SECRET, password));
    return await loginUser(user, SECRET, password);
  },
  selectStarterPack: async (
    _: any,
    { starterPackID }: any,
    //@ts-ignore
    { headers: { authorization } },
  ): Promise<any> => {
    console.log(authorization, starterPackID);
    const secret = process.env.SECRET;
    const userId = authorizationHandler(authorization, secret);
    const starterPack = await getStarterPackById(starterPackID);
    const user = await getUserById(userId);
    if (user.hasSelectedStarters) {
      return null;
    }
    user.battlers = [...user.battlers, ...starterPack.battlers];
    user.hasSelectedStarters = true;
    await user.save();

    return {
      //@ts-ignore
      ...user.doc,
      password: 'removeThisAfterPrototypingNotRealPassword',
    };
  },
};

export default mutation;
