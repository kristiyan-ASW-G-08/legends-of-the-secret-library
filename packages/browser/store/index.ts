import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web
import {
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
// import { authReducer } from '../reducers/AuthReducers';
import authReducer from '../slices/AuthSlice';

const reducer = combineReducers({
  auth: authReducer,
});

const persistConfig = {
  key: 'root',
  storage,
};
const preloadedState = {};

const persistedReducer = persistReducer(persistConfig, reducer);

const Store = configureStore({
  reducer: persistedReducer,
  devTools: true,
  preloadedState,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(Store);
export default Store;
