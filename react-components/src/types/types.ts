// import React from 'react';
export type CardType = {
  name: string;
  weight: string;
  image: string;
  price: string;
  country: string;
};

export type Cards = CardType[];

export type Store = {
  cards: Cards;
};
