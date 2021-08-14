/* eslint-disable @typescript-eslint/naming-convention */
export interface Article {
  author: string;
  content: string;
  description: string;
  publishedAt: string;
  source: { id: string; name: string };
  title: string;
  urlToImage: string;
}

export type CardProps = {
  card: Article;
};

export interface GET200_Articles {
  articles: Article[];
}

export type Props = {
  setState: React.Dispatch<React.SetStateAction<Article[]>>;
};

export enum SortType {
  relevancy = 'relevancy',
  popularity = 'popularity',
  publishedAt = 'publishedAt',
}
