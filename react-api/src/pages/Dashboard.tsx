/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from 'react';
import SearchBar from '../components/searchBar/SearchBar';
import Card from '../components/card/Card';
import { Article, SortType } from '../types/types';
import Sort from '../components/sort/Sort';

const Dashboard = () => {
  const [state, setState] = useState<Article[]>([]);
  const [sortBy, setSortBy] = useState<SortType>(SortType.relevancy);
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  return (
    <div className="dashboard">
      <SearchBar setState={setState} sortBy={sortBy} from={from} to={to} />
      <Sort
        setSortBy={setSortBy}
        sortBy={sortBy}
        setFrom={setFrom}
        from={from}
        to={to}
        setTo={setTo}
      />
      {state.map((card, index) => {
        return <Card key={index.toString()} card={card} />;
      })}
    </div>
  );
};

export default Dashboard;
