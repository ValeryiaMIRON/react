/* eslint-disable @typescript-eslint/no-unused-vars */
import axios, { AxiosResponse } from 'axios';
import React, { FC, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axiosInstance from '../../services/api';
import { Article, CardProps, GET200_Articles } from '../../types/types';
import './Details.scss';

const API_KEY = 'cae8d4a0c7904ac88d9df23b23d9974e';
const Details: FC = () => {
  const [currentCard, setCurrentCard] = useState<Article>();
  const [loading, setLoading] = useState<boolean>(false);
  const { title }: { title: string } = useParams();

  useEffect(() => {
    // const getCurrentCard = async () => {
    setLoading(true);
    fetch(`https://newsapi.org/v2/everything?qInTitle=${title}&apiKey=${API_KEY}`);
    //   const res = await axios.get(`v2/everything?qInTitle=${title}&apiKey=${API_KEY}`);
    // setCurrentCard(res.data.articles);
    setLoading(false);
    // };
    // getCurrentCard();
  }, [title]);

  return (
    <div className="card-container">
      <h1>Details</h1>

      {/* .filter((card) => card.title === title)
        .map((card, index) => { */}
      <div>
        <div>{currentCard?.title}</div>
        <p>{currentCard?.author}</p>
        <p>{currentCard?.source}</p>
        <p>{currentCard?.description}</p>
      </div>
    </div>
  );
};

export default Details;
