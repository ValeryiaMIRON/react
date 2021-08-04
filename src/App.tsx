import './styles.scss';
import ReactForm from './components/reactForm/ReactForm';
import Card from './components/card/Card';
import { useState } from 'react';
import { CardType } from './types/types';

export const App = () => {
  const [formValues, setFormValues] = useState<CardType[]>([]);
  return (
    <>
      <ReactForm setFormValues={setFormValues} />
      <main>
        {formValues.map((card, index) => {
          return <Card card={card} key={index} />;
        })}
      </main>
    </>
  );
};

export default App;
