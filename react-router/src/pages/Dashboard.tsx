/* eslint-disable no-console */
import React, { useEffect, useState } from 'react';
import SearchBar from '../components/searchBar/SearchBar';
import Card from '../components/card/Card';
import { Article, SortType } from '../types/types';
import Sort from '../components/sort/Sort';
import Pagination from '../components/paginataion/Pagination';
import Header from '../components/header/Header';
import axiosInstance from '../services/api';

// const API_KEY = 'cae8d4a0c7904ac88d9df23b23d9974e';
const API_KEY = '2b9dd94d61b0487c8a64075d6312bf6c';

const Dashboard = () => {
  const [state, setState] = useState<Article[]>([]);
  const [sortBy, setSortBy] = useState<SortType>(SortType.relevancy);
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  const [page, setPage] = useState<number>(1);
  const [pageSize, setPageSize] = useState<number>(5);
  const [searchData, setSearchData] = useState<string>('t');

  useEffect(() => {
    try {
      axiosInstance
        .get(
          `v2/everything?q=${searchData}&apiKey=${API_KEY}&sortBy=${sortBy}&from=${from}&to=${to}&pageSize=${pageSize}&page=${page}`,
        )
        .then((response) => setState(response.data.articles));
    } catch (err: any) {
      // console.error(err);
    }
  }, [from, page, pageSize, searchData, sortBy, to]);

  const paginate = (pageNumber: number) => setPage(pageNumber);

  return (
    <div className="dashboard">
      <Header />
      <SearchBar setSearchData={setSearchData} />
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
