import { configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  // FLUSH,
  // REHYDRATE,
  // PAUSE,
  // PERSIST,
  // PURGE,
  // REGISTER,
} from 'redux-persist';

import logger from 'redux-logger';

import rootReducer from './root-reducer';

export const store = configureStore({
  reducer: rootReducer,
  middleware: [logger],
  devTools: true,
});

export const persistor = persistStore(store);
