import AsyncStorage from '@react-native-community/async-storage';
import {configureStore} from '@reduxjs/toolkit';
import {
  createMigrate,
  PersistedState,
  persistReducer,
  persistStore,
} from 'redux-persist';
import rootReducer from './rootReducer';

const migrations = {
  0: (state: PersistedState) => {
    // migration clear out device state
    return {
      _persist: {
        rehydrated: true,
        version: state?._persist?.version ?? 0,
      },
    };
  },
};

const persistConfig = {
  key: 'primary',
  version: 8,
  storage: AsyncStorage,
  migrate: createMigrate(migrations, {debug: false}),
  whitelist: ['auth', 'properties'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
      immutableCheck: false,
    }),
});

const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;

export default store;
export {persistor};
