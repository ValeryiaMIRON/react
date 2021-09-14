import React, { ChangeEvent, FC } from 'react';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { setPage, setPageSize } from '../../redux/reducer';

import './Pagination.scss';

const Pagination: FC = () => {
  const dispatch = useAppDispatch();
  const page = useAppSelector((state) => state.articles.page);
  const article = useAppSelector((state) => state.articles.article);
  const pageSize = useAppSelector((state) => state.articles.pageSize);
  const pageNumber = [];

  for (let i = 1; i <= Math.ceil(100 / pageSize); i += 1) {
    pageNumber.push(i);
  }

  const handlePageSize = (e: ChangeEvent<HTMLSelectElement>) => {
    const { value } = e.target;
    dispatch(setPageSize(Number(value)));
    dispatch(setPage(1));
  };

  return (
    <div className="pagination">
      {article.length ? (
        <div className="pagination-wrapper">
          <div className="pagination-pageNumber">
            <div className="none no" style={{ color: 'red' }} />

            {pageNumber.map((number) => (
              <button
                type="button"
                id="selectedPageButton"
                className={page === number ? 'selectedPage' : 'null'}
                key={number}
                onClick={() => dispatch(setPage(number))}
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
