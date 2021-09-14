import React, { useEffect } from 'react';
import SearchBar from '../components/searchBar/SearchBar';
import Card from '../components/card/Card';
import Sort from '../components/sort/Sort';
import Pagination from '../components/paginataion/Pagination';
import Header from '../components/header/Header';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { getArticles } from '../store';

const Dashboard = () => {
  const dispatch = useAppDispatch();
  const article = useAppSelector((state) => state.articles.article);
  const sortBy = useAppSelector((state) => state.articles.sortBy);
  const inputDateFrom = useAppSelector((state) => state.articles.from);
  const inputDateTo = useAppSelector((state) => state.articles.to);
  const page = useAppSelector((state) => state.articles.page);
  const pageSize = useAppSelector((state) => state.articles.pageSize);
  const searchData = useAppSelector((state) => state.articles.searchData);

  useEffect(() => {
    dispatch(getArticles(searchData, pageSize, page, inputDateFrom, sortBy, inputDateTo));
  }, [dispatch, searchData, pageSize, page, inputDateFrom, sortBy, inputDateTo]);

  return (
    <div className="dashboard">
      <Header />
      <SearchBar />
      <Sort />
      <Pagination />
      {article.map((card, index) => {
        return <Card key={index.toString()} card={card} />;
      })}
    </div>
  );
};

export default Dashboard;
