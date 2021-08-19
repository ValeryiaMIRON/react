import React, { useState } from 'react';
import SearchBar from '../components/searchBar/SearchBar';
import Card from '../components/card/Card';
import { Article, SortType } from '../types/types';
import Sort from '../components/sort/Sort';
import Pagination from '../components/paginataion/Pagination';
import Header from '../components/header/Header';

const Dashboard = () => {
  const [state, setState] = useState<Article[]>([]);
  const [sortBy, setSortBy] = useState<SortType>(SortType.relevancy);
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  const [page, setPage] = useState<number>(1);
  const [pageSize, setPageSize] = useState<number>(5);
  const paginate = (pageNumber: number) => setPage(pageNumber);

  return (
    <div className="dashboard">
      <Header />
      <SearchBar
        page={page}
        pageSize={pageSize}
        setState={setState}
        sortBy={sortBy}
        from={from}
        to={to}
      />
      <Sort
        setSortBy={setSortBy}
        sortBy={sortBy}
        setFrom={setFrom}
        from={from}
        to={to}
        setTo={setTo}
      />
      <Pagination
        articles={state}
        page={page}
        pageSize={pageSize}
        onChangePage={(pageFromInput: number) => setPage(pageFromInput)}
        paginate={paginate}
        setPageSize={setPageSize}
      />
      {state.map((card, index) => {
        return <Card key={index.toString()} card={card} />;
      })}
    </div>
  );
};

export default Dashboard;
