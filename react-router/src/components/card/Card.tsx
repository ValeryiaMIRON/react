import React, { FC } from 'react';
import './card.scss';
import { Link } from 'react-router-dom';

import { CardProps } from '../../types/types';

const Card: FC<CardProps> = ({ card }) => {
  return (
    <div className="card-container">
      <div className="card card-title">
        <span>Title: </span>
        <p>{card.title}</p>
      </div>
      <div className="card card-author">
        <span>Author: </span>
        <p className="author">{card.author}</p>
      </div>
      <div className="card card-description">
        <span>Description: </span>
        <p>{card.description}</p>
      </div>
      <div className="card card-published">
        <span>Published at: </span>
        <p className="published">{card.publishedAt}</p>
      </div>
      <div className="card card-image">
        <span>Image: </span>
        <p>
          <img className="card-img" src={card.urlToImage} alt={card.title} />
        </p>
      </div>
      <div>
        <Link to={`/details/${card.title}`}>View more</Link>
      </div>
    </div>
  );
};

export default Card;
