import React, { ChangeEvent, FC, useEffect, useState } from 'react';
import { paginationProps } from '../../types/types';
import './Pagination.scss';

const Pagination: FC<paginationProps> = ({ page, onChangePage, pageSize }) => {
  const [pagPage, setPagPage] = useState<number | string>('');

  const pageNumber = [];

  for (let i = 1; i <= Math.ceil(pageSize); i = +1) {
    pageNumber.push(i);
  }

  useEffect(() => {
    setPagPage(page);
  }, [page]);
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    const regExp = /\d+/;
    const matchedValue = value.match(regExp);
    if (matchedValue) {
      const newValue = +matchedValue[0];
      onChangePage(newValue);
      setPagPage(newValue);
    } else {
      setPagPage('');
    }
  };

  return (
    <div className="pagination">
      <div>
        <label htmlFor="pagination">
          <input type="text" name="pagination" value={pagPage} onChange={handleChange} />
        </label>
      </div>

      <div>
        <ul>
          {/* {pageNumber.map((number) => {
          return (
            <li key={number}>
              <a href="!#">{number}</a>
            </li>
          );
        })} */}
          {pageNumber.map((number) => (
            <li key={number}>
              <a href="!#">{number}</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Pagination;
