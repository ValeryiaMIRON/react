import './searchBar.scss';
import React from 'react';

const SearchBar = () => {
  return (
    <div className="search-bar">
      <form action="/" method="get">
        <label htmlFor="header-search">
          <span className="visually-hidden">Search</span>
        </label>
        <input
          type="text"
          className="search-input"
          id="header-search"
          placeholder="Search"
          name="s"
        />
        <input className="search-button" type="submit" value="Send" />
      </form>
    </div>
  );
};

export default SearchBar;
