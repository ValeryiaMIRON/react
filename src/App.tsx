import './styles.scss';
import SearchBar from './components/SearchBar/SearchBar';
import { Card } from './components/Card/Card';
import { store } from './store/store';

export const App = () => {
  return (
    <>
      <SearchBar />
      <div className="card-wrapper">
        {store.cards.map((card, index) => {
          return (
            <Card
              key={index}
              name={card.name}
              weight={card.weight}
              image={card.image}
              price={card.price}
              country={card.country}
            />
          );
        })}
      </div>
    </>
  );
};

export default App;
