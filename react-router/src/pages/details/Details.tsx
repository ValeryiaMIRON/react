/* eslint-disable @typescript-eslint/no-unused-vars */
import axios, { AxiosResponse } from 'axios';
import React, { FC, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axiosInstance from '../../services/api';
import { Article } from '../../types/types';
import './Details.scss';

// const API_KEY = 'cae8d4a0c7904ac88d9df23b23d9974e';
const API_KEY = '2b9dd94d61b0487c8a64075d6312bf6c';

const Details: FC = () => {
  const [currentCard, setCurrentCard] = useState<Article[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const { title }: { title: string } = useParams();

  useEffect(() => {
    setLoading(true);

    axiosInstance.get(`v2/everything?qInTitle=${title}&apiKey=${API_KEY}`).then((res) => {
      setCurrentCard(res.data.articles);
    });

    setLoading(false);
  }, [title]);

  return (
    <div className="details-container">
      <h1 className="details-title">Details</h1>
      {currentCard
        .filter((card, index) => card.title === title && index === 0)
        .map((card, index) => {
          return (
            <div key={index.toString()}>
              <div className="details-subtitle">
                <div className="details-inf">Title: </div>
                <div className="details-subtitle_inf">{card.title}</div>
              </div>
              <div className="details-subtitle">
                <div className="details-inf">Author: </div>
                <div className="details-subtitle_inf">{card.author}</div>
              </div>
              <div className="details-subtitle">
                <div className="details-inf">Description: </div>
                <div className="details-subtitle_inf">{card.description}</div>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default Details;
