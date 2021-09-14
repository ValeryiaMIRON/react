import React, { ChangeEvent, FC, useState } from 'react';
import './searchBar.scss';
import { Props } from '../../types/types';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { setIsLoading, setPage, setSearchData } from '../../redux/reducer';

const SearchBar: FC<Props> = () => {
  const loading = useAppSelector((state) => state.articles.isLoading);
  const dispatch = useAppDispatch();
  const [searchValue, setSearchValue] = useState<string>('');
  // const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleSubmit = async (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(setIsLoading(true));
    dispatch(setSearchData(searchValue));
    // paginate(1); // как заменить
    // dispatch(setPage(1));
    // dispatch(setPage({ value: 1 }));
    dispatch(setPage(1));
    dispatch(setIsLoading(false));
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    // dispatch(setSearchValue(value));
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
          <button type="submit" className="search-button" id="submit" disabled={loading}>
            {loading ? 'Loading...' : 'Search'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
