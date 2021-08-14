import { AxiosResponse } from 'axios';
import React, { ChangeEvent, FC, useState } from 'react';
import axiosInstance from '../../services/api';
import './searchBar.scss';
import { Props, GET200_Articles, SortType } from '../../types/types';

// const API_KEY = '6acc09f802644746b9fafbaeda30a3d6';
const API_KEY = 'cae8d4a0c7904ac88d9df23b23d9974e';

const SearchBar: FC<Props> = ({ setState }) => {
  const [searchValue, setSearchValue] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const [sortBy, setSortBy] = useState<SortType>(SortType.relevancy);

  const handleSubmit = async (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const response: AxiosResponse<GET200_Articles> = await axiosInstance.get(
        `v2/everything?q=${searchValue}&apiKey=${API_KEY}&sortBy=${sortBy}`,
      );
      setState(response.data.articles);

      // return response;
    } catch (err: any) {
      // console.error(e);
    } finally {
      setIsLoading(false);
    }
  };
  // console.log('state', state);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setSearchValue(value);
  };

  return (
    <div className="search-bar">
      <form action="/" method="get" onSubmit={handleSubmit}>
        <label htmlFor="search">
          <input
            type="text"
            className="search-input"
            id="search"
            name="search"
            onChange={handleChange}
            value={searchValue}
            placeholder="pie"
          />
        </label>
        <button type="submit" className="search-button" id="submit" disabled={isLoading}>
          {isLoading ? 'Loading...' : 'Search'}
        </button>
        <div className="radioBtn">
          <label htmlFor="SortBy">Sort by: </label>
          <label htmlFor="relevancy">
            relevancy
            <input
              name="relevancy"
              type="radio"
              value={SortType.relevancy}
              checked={sortBy === SortType.relevancy}
              onChange={() => setSortBy(SortType.relevancy)}
            />
          </label>
          <label htmlFor="popularity">
            popularity
            <input
              name="popularity"
              type="radio"
              value={SortType.popularity}
              checked={sortBy === SortType.popularity}
              onChange={() => setSortBy(SortType.popularity)}
            />
          </label>
          <label htmlFor="publishedAt">
            publishedAt
            <input
              name="publishedAt"
              type="radio"
              value={SortType.publishedAt}
              checked={sortBy === SortType.publishedAt}
              onChange={() => setSortBy(SortType.publishedAt)}
            />
          </label>
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
