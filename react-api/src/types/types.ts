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

export interface CardProps {
  card: Article;
}

export interface GET200_Articles {
  articles: Article[];
}

export interface Props {
  setState: React.Dispatch<React.SetStateAction<Article[]>>;
  sortBy: SortType;
  to: string;
  from: string;
}

export enum SortType {
  relevancy = 'relevancy',
  popularity = 'popularity',
  publishedAt = 'publishedAt',
}

export interface SortProps {
  sortBy: SortType;
  setSortBy: (sortBy: SortType) => void;
  from: string;
  setFrom: (from: string) => void;
  to: string;
  setTo: (to: string) => void;
}
