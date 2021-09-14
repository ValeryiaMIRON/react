import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { articleSlice, setArticle } from './redux/reducer';
import axiosInstance from './services/api';
import { SortType } from './types/types';

// const API_KEY = '2b9dd94d61b0487c8a64075d6312bf6c';
const API_KEY = 'cae8d4a0c7904ac88d9df23b23d9974e';

const rootReducer = combineReducers({
  articles: articleSlice.reducer,
});
const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV !== 'production',
});

export const getArticles =
  (
    searchData: string,
    pageSize: number,
    page: number,
    inputDateFrom?: string,
    sortBy?: SortType,
    inputDateTo?: string,
  ) =>
  (dispatch: any) => {
    axiosInstance
      .get(
        `v2/everything?q=${searchData}&apiKey=${API_KEY}&sortBy=${sortBy}&from=${inputDateFrom}&to=${inputDateTo}&pageSize=${pageSize}&page=${page}`,
      )
      .then((response) => dispatch(setArticle(response.data.articles)))
      .catch((error) => {
        // eslint-disable-next-line no-console
        console.error(error);
      });
  };

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
