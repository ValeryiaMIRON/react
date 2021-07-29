import React from 'react';
import './card.scss';

export const Card = (props: {
  image: string | undefined;
  name: React.ReactNode;
  weight: React.ReactNode;
  price: React.ReactNode;
  country: React.ReactNode;
}) => {
  return (
    <div className="card">
      <img src={props.image} alt={props.image} />
      <h3>{props.name}</h3>
      <p className="card-weight">{props.weight}</p>
      <p className="card-price">{props.price}</p>
      <p>{props.country}</p>
    </div>
  );
};
