import React, { ChangeEvent, FC, useState } from 'react';
import './searchBar.scss';
import { Props } from '../../types/types';

const SearchBar: FC<Props> = ({ setSearchData, paginate }) => {
  const [searchValue, setSearchValue] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleSubmit = async (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setSearchData(searchValue);
    paginate(1);
    setIsLoading(false);
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
