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
  // totalResults: number;
}

export interface Props {
  // setState: React.Dispatch<React.SetStateAction<Article[]>>;
  // sortBy: SortType;
  // to: string;
  // from: string;
  // page: number;
  // pageSize: number;
  setSearchData: React.Dispatch<React.SetStateAction<string>>;
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
export interface paginationProps {
  page: number;
  onChangePage: (pageFromInput: number) => void;
  pageSize: number;
  paginate: (pageNumber: number) => void;
  articles: Article[];
  setPageSize: (pageSize: number) => void;
}

export interface appProps {
  title: string;
}
