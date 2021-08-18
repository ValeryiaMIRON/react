import React, { FC } from 'react';

import { paginationProps } from '../../types/types';
import './Pagination.scss';

const Pagination: FC<paginationProps> = ({ page, pageSize, paginate, articles }) => {
  // const [pagPage, setPagPage] = useState<number | string>('');

  const pageNumber = [];

  for (let i = 1; i <= Math.ceil(100 / pageSize); i += 1) {
    pageNumber.push(i);
  }

  // useEffect(() => {
  //   setPagPage(page);
  // }, [page]);
  // const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
  //   const { value } = e.target;
  //   const regExp = /\d+/;
  //   const matchedValue = value.match(regExp);
  //   if (matchedValue) {
  //     const newValue = +matchedValue[0];
  //     onChangePage(newValue);
  //     setPagPage(newValue);
  //   } else {
  //     setPagPage('');
  //   }
  // };

  return (
    <div className="pagination">
      {articles.length ? (
        <div>
          {/* <div>
            <label htmlFor="pagination">
              <input type="text" name="pagination" value={pagPage} onChange={handleChange} />
            </label>
          </div> */}
          <div className="pagination-pageNumber">
            {pageNumber.map((number) => (
              <button
                type="button"
                className={page === number ? 'selectedPage' : 'null'}
                key={number}
                onClick={() => paginate(number)}
              >
                {number}
              </button>
            ))}
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Pagination;
