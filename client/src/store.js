import { configureStore } from "@reduxjs/toolkit";
import dataSlice from "./reducers/dataSlice";
import newSlice from "./reducers/newSlice";

import {
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist'

import storage from 'redux-persist/lib/storage'


const persistConfig = {
    key: 'root',
    version: 1,
    storage,
}

const persistDataReducer = persistReducer(persistConfig, dataSlice)
const persistNewSlice = persistReducer(persistConfig, newSlice)

export const store = configureStore({
    reducer: {persistDataReducer, persistNewSlice},
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
      }),
  })
  