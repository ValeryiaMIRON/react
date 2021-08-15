import { AxiosResponse } from 'axios';
import React, { ChangeEvent, FC, useState } from 'react';
import axiosInstance from '../../services/api';
import './searchBar.scss';
import { Props, GET200_Articles } from '../../types/types';

// const API_KEY = '6acc09f802644746b9fafbaeda30a3d6';
const API_KEY = 'cae8d4a0c7904ac88d9df23b23d9974e';

const SearchBar: FC<Props> = ({ setState, sortBy, to, from }) => {
  const [searchValue, setSearchValue] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleSubmit = async (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const response: AxiosResponse<GET200_Articles> = await axiosInstance.get(
        `v2/everything?q=${searchValue}&apiKey=${API_KEY}&sortBy=${sortBy}&from=${from}&to=${to}`,
      );
      setState(response.data.articles);
    } catch (err: any) {
      // console.error(e);
    } finally {
      setIsLoading(false);
    }
  };

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
        <div className="button-wrapper">
          <button type="submit" className="search-button" id="submit" disabled={isLoading}>
            {isLoading ? 'Loading...' : 'Search'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
