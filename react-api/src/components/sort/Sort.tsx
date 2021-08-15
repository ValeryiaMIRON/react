import React, { FC, useEffect, useState } from 'react';
import { SortProps, SortType } from '../../types/types';
import './sort.scss';

const Sort: FC<SortProps> = ({ sortBy, setSortBy, from, to, setFrom, setTo }) => {
  const calendar = () => {
    const today = new Date();
    const dd = String(today.getDate()).padStart(2, '0');
    const mm = String(today.getMonth() + 1).padStart(2, '0');
    const yyyy = today.getFullYear();
    return `${yyyy}-${mm}-${dd}`;
  };
  return (
    <div className="sort">
      <form>
        <div className="radioBtn">
          <label htmlFor="SortBy">Sort by: </label>
          <label htmlFor="relevancy">
            <input
              name="relevancy"
              type="radio"
              value={SortType.relevancy}
              checked={sortBy === SortType.relevancy}
              onChange={() => setSortBy(SortType.relevancy)}
            />
            relevancy
          </label>
          <label htmlFor="popularity">
            <input
              name="popularity"
              type="radio"
              value={SortType.popularity}
              checked={sortBy === SortType.popularity}
              onChange={() => setSortBy(SortType.popularity)}
            />
            popularity
          </label>
          <label htmlFor="publishedAt">
            <input
              name="publishedAt"
              type="radio"
              value={SortType.publishedAt}
              checked={sortBy === SortType.publishedAt}
              onChange={() => setSortBy(SortType.publishedAt)}
            />
            publishedAt
          </label>
        </div>
        <div className="date">
          <label htmlFor="dateFrom">
            from:{' '}
            <input
              type="date"
              name="dateFrom"
              value={from}
              max={calendar()}
              onChange={(e) => setFrom(e.target.value)}
            />
          </label>
          <label htmlFor="dateTo">
            to:{' '}
            <input
              type="date"
              max={calendar()}
              value={to}
              onChange={(e) => setTo(e.target.value)}
            />
          </label>
        </div>
      </form>
    </div>
  );
};

export default Sort;
