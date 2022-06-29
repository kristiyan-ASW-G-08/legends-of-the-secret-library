import { AuthenticationError } from 'apollo-server-express';
import { verify } from 'jsonwebtoken';

const authenticationHandler = (header: string, secret: string): string => {
  console.log(header);
  const authError = new AuthenticationError('Log in to perform this action');
  if (!header) {
    throw authError;
  }
  const token = JSON.parse(header.split(' ')[1]);
  // @ts-ignore
  const { userId } = verify(token, secret);
  if (!userId) {
    throw authError;
  }

  return userId;
};
export default authenticationHandler;
