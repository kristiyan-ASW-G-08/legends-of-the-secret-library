import { login, logout, initialState } from './index';

describe('auth reducers', () => {
  const authState = {
    token: 'someToken',
    email: 'someEmail@Mail.tk',
    _id: 'someId',
  };
  it('login', () => {
    expect(login(authState)).toMatchObject(authState);
  });
  it('logout', () => {
    expect(logout(authState)).toMatchObject(initialState);
  });
});
