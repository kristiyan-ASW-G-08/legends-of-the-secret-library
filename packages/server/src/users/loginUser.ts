import UserType from '@src/types/UserType';
import { UserInputError } from 'apollo-server-express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
const loginUser = async (user: UserType, SECRET: string, password: string) => {
  const passwordMatch = await bcrypt.compare(password, user.password);
  if (!passwordMatch) {
    throw new UserInputError('Validation Error', {
      validationErrors: [
        {
          path: 'password',
          message: 'Wrong password. Try again',
        },
      ],
    });
  }

  const token = jwt.sign(
    {
      userId: user._id,
    },
    SECRET,
    { expiresIn: '96h' },
  );

  return {
    token,
    user: {
      //@ts-ignore
      ...user._doc,
      password: 'removeThisAfterPrototypingNotRealPassword',
    },
  };
};

export default loginUser;
