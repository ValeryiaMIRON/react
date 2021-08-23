// import axios from 'axios';
import React, { FC, useState } from 'react';
// import { useParams } from 'react-router-dom';
import { Article } from '../../types/types';
import './Details.scss';

// const API_KEY = 'cae8d4a0c7904ac88d9df23b23d9974e';

const Details: FC = () => {
  const [cardType, setCardType] = useState<Article[]>([]);
  //   const [loading, setLoading] = useState<boolean>(false);
  //   const { author }: { author: string } = useParams();

  //   useEffect(() => {
  //     const getCardType = async () => {
  //       setLoading(true);
  //       const res = await axios.get(`v2/everything?&apiKey=${API_KEY}&author={author hook}`);
  //       setCardType(res.data.articles);
  //       setLoading(false);
  //     };
  //     getCardType();
  //   }, [cardType]);

  return (
    <div className="card-container">
      {cardType
        // .filter((card) => card.author === author)
        .map((card, index) => (
          <div key={index.toString()}>
            <h1>{card.author}</h1>
            <p>{card.content}</p>
            <p>{card.source}</p>
            <p>{card.description}</p>
          </div>
        ))}
    </div>
  );
};

export default Details;
