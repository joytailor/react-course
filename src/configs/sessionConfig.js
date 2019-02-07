import storage from 'redux-persist/lib/storage';

export const rootPersistConfig = {
  key: 'root',
  storage,
  whitelist: ['cart'],
};

export const sessionPersistConfig = {
  key: 'session',
  storage,
  whitelist: ['token'],
};
