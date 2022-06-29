import User from '@/types/User';
import {
  createSlice,
  PayloadAction,
  createEntityAdapter,
} from '@reduxjs/toolkit';
import { PURGE } from 'redux-persist';

export const initialState = {
  user: {},
  _id: '',
};
export interface AuthState {
  token: string;
  user: User;
}
const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    //@ts-ignore
    setAuthState: (state: any, action: PayloadAction<AuthState>) => {
      if (typeof window !== undefined) {
        localStorage.setItem('token', JSON.stringify(action.payload.token));
      }
      return action.payload;
    },
    logout: (state: any, action: PayloadAction<AuthState>) => {
      if (typeof window !== undefined) {
        localStorage.removeItem('token');
      }
      return initialState;
    },
  },
  extraReducers: builder => {
    builder.addCase(PURGE, state => {
      return initialState;
    });
  },
});

export const { setAuthState, logout } = authSlice.actions;
export default authSlice.reducer;
