import { combineReducers, configureStore } from '@reduxjs/toolkit';
import articlesReducer from './redux/reducer';

const rootReducer = combineReducers({
  articles: articlesReducer,
});
const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV !== 'production',
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
