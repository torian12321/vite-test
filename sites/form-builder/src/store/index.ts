import { combineReducers, configureStore } from '@reduxjs/toolkit';
import fieldsReducer from './slices/fieldsSlice';
import settingsReducer from './slices/settings.slice';

const rootReducer = combineReducers({
  settings: settingsReducer,
  fields: fieldsReducer,
});

export const store = configureStore({
  reducer: rootReducer
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
