import React, { FC } from 'react';
import './card.scss';
import { Link } from 'react-router-dom';

import { CardProps } from '../../types/types';

const Card: FC<CardProps> = ({ card }) => {
  return (
    <div className="card-container">
      <div className="card card-title">
        <span className="card-subtitle">Title: </span>
        <p>{card.title}</p>
      </div>
      <div className="card card-author">
        <span className="card-subtitle">Author: </span>
        <p className="author">{card.author}</p>
      </div>
      <div className="card card-description">
        <span className="card-subtitle">Description: </span>
        <p>{card.description}</p>
      </div>
      <div className="card card-published">
        <span className="card-subtitle">Published at: </span>
        <p className="published">{card.publishedAt}</p>
      </div>
      <div className="card card-image">
        <span className="card-subtitle">Image: </span>
        <p>
          <img className="card-img" src={card.urlToImage} alt={card.title} />
        </p>
      </div>
      <div className="card card-link">
        <Link className="details-link" to={`/details/${card.title}`}>
          View more
        </Link>
      </div>
    </div>
  );
};

export default Card;
