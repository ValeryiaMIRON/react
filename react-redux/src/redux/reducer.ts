import { createSlice } from '@reduxjs/toolkit';
import { Article, SortType } from '../types/types';

export interface ArticlesState {
  article: Article[];
  searchValue: string;
  isLoading: boolean;
  sortBy: SortType;
  from: string;
  to: string;
  searchData: string;
  page: number;
  pageSize: number;
}

const initialState: ArticlesState = {
  article: [],
  searchValue: '',
  isLoading: false,
  sortBy: SortType.relevancy,
  from: '',
  to: '',
  searchData: 't',
  page: 1,
  pageSize: 5,
};

export const articleSlice = createSlice({
  name: 'article',
  initialState,
  reducers: {
    setArticle: (state, action) => {
      state.article = action.payload;
    },
    setSearchValue: (state, action) => {
      state.searchValue = action.payload;
    },
    setIsLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    setSortBy: (state, action) => {
      state.sortBy = action.payload;
    },
    setFrom: (state, action) => {
      state.from = action.payload;
    },
    setTo: (state, action) => {
      state.to = action.payload;
    },
    setSearchData: (state, action) => {
      state.searchData = action.payload;
    },
    setPage: (state, action) => {
      state.page = action.payload;
    },
    setPageSize: (state, action) => {
      state.pageSize = action.payload;
    },
  },
});

export const {
  setArticle,
  setSearchValue,
  setIsLoading,
  setSortBy,
  setFrom,
  setTo,
  setSearchData,
  setPage,
  setPageSize,
} = articleSlice.actions;

export default articleSlice.reducer;
