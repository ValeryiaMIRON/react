import React, { ChangeEvent, FC } from 'react';
import './searchBar.scss';
import { Props } from '../../types/types';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { setIsLoading, setSearchValue } from '../../redux/reducer';

const SearchBar: FC<Props> = ({ setSearchData, paginate }) => {
  const searchInputValue = useAppSelector((state) => state.articles.searchValue);
  const loading = useAppSelector((state) => state.articles.isLoading);
  const dispatch = useAppDispatch();
  // const [searchValue, setSearchValue] = useState<string>('');
  // const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleSubmit = async (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    // setIsLoading(true);
    dispatch(setIsLoading(true));
    setSearchData(searchInputValue); // как заменить setSearchData
    paginate(1); // как заменить
    // setIsLoading(false);
    dispatch(setIsLoading(false));
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    dispatch(setSearchValue(value));
    // setSearchValue(value);
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
            value={searchInputValue}
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
