export type CardType = {
  name: string;
  surname: string;
  deliveryType1: string | boolean;
  deliveryDate: string;
  typePayment: string | undefined;
  checkbox: boolean;
};

export type cardProps = {
  card: CardType;
};

export type Props = {
  setFormValues: React.Dispatch<React.SetStateAction<CardType[]>>;
};
