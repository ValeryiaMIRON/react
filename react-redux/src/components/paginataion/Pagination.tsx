import React, { ChangeEvent, FC } from 'react';
import { useAppDispatch } from '../../redux/hooks';
import { setPage } from '../../redux/reducer';
import { paginationProps } from '../../types/types';
import './Pagination.scss';

const Pagination: FC<paginationProps> = ({ page, pageSize, articles, setPageSize }) => {
  const dispatch = useAppDispatch();
  const pageNumber = [];

  for (let i = 1; i <= Math.ceil(100 / pageSize); i += 1) {
    pageNumber.push(i);
  }

  const handlePageSize = (e: ChangeEvent<HTMLSelectElement>) => {
    const { value } = e.target;
    setPageSize(Number(value));
    dispatch(setPage(1));
    // paginate(1);
  };

  return (
    <div className="pagination">
      {articles.length ? (
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
