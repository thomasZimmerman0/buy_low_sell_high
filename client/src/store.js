import { configureStore } from "@reduxjs/toolkit";
import dataSlice from "./reducers/dataSlice";
import newSlice from "./reducers/newSlice";
import percentSlice from "./reducers/percentSlice"
import { combineReducers } from "@reduxjs/toolkit";

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
const persistPercent = persistReducer(persistConfig, percentSlice)

const rootReducer = combineReducers({
  data : persistDataReducer,
  percent: persistPercent,
  newSlice : persistNewSlice
})

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
      }),
  })
  