import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { articleSlice } from './redux/reducer';

const rootReducer = combineReducers({
  articles: articleSlice.reducer,
});
const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV !== 'production',
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
