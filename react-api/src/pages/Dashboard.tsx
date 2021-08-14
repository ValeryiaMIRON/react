/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from 'react';
import SearchBar from '../components/searchBar/SearchBar';
import Card from '../components/card/Card';
import { Article } from '../types/types';
// import Posts from './Posts';

const Dashboard = () => {
  const [state, setState] = useState<Article[]>([]);
  // console.log(state);

  return (
    <div className="dashboard">
      <SearchBar setState={setState} />
      {state.map((card, index) => {
        return <Card key={index.toString()} card={card} />;
      })}
    </div>
  );
};

export default Dashboard;
