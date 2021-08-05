export type CardType = {
  name: string;
  surname: string;
  deliveryType: string | boolean;
  deliveryDate: string;
  typePayment: string | undefined;
  checkbox: boolean;
};

export type CardProps = {
  card: CardType;
};

export type Props = {
  setFormValues: React.Dispatch<React.SetStateAction<CardType[]>>;
};
