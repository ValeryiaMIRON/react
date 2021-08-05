import './Card.scss';
import { FC } from 'react';
import { CardProps } from '../../types/types';

export const Card: FC<CardProps> = ({ card }) => {
  return (
    <div className="card">
      <div>
        <span style={{ color: 'black' }}>Name:</span>
        {card.name}
      </div>
      <div>
        {' '}
        <span style={{ color: 'black' }}>Surname:</span>
        {card.surname}
      </div>
      <div>
        <span style={{ color: 'black' }}>Delivery date:</span>
        {card.deliveryDate}
      </div>
      <div>
        <span style={{ color: 'black' }}>Delivery type: </span>
        {card.deliveryType}
      </div>
      <div>
        <span style={{ color: 'black' }}>Type of payment:</span>
        {card.typePayment}
      </div>
    </div>
  );
};

export default Card;
