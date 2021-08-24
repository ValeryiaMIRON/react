import React, { ChangeEvent, FC } from 'react';

import { paginationProps } from '../../types/types';
import './Pagination.scss';

const Pagination: FC<paginationProps> = ({ page, pageSize, paginate, articles, setPageSize }) => {
  const pageNumber = [];

  for (let i = 1; i <= Math.ceil(100 / pageSize); i += 1) {
    pageNumber.push(i);
  }

  // document.querySelector('.pagination')?.addEventListener('click', () => {
  //   document.querySelector('.no')?.classList.remove('no');
  // });

  const handlePageSize = (e: ChangeEvent<HTMLSelectElement>) => {
    const { value } = e.target;
    setPageSize(Number(value));
    paginate(1);
  };

  return (
    <div className="pagination">
      {articles.length ? (
        <div className="pagination-wrapper">
          <div className="pagination-pageNumber">
            <div className="none no" style={{ color: 'red' }}>
              * Нажмите на кнопку Search
            </div>

            {pageNumber.map((number) => (
              <button
                type="button"
                id="selectedPageButton"
                className={page === number ? 'selectedPage' : 'null'}
                key={number}
                onClick={() => paginate(number)}
              >
                {number}
              </button>
            ))}
          </div>

          <select name="ItemsOnPage" onBlur={handlePageSize}>
            <option value="5">5</option>
            <option value="10">10</option>
            <option value="15">15</option>
          </select>
        </div>
      ) : null}
    </div>
  );
};

export default Pagination;
