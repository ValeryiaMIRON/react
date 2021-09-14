export interface Article {
  author: string;
  content: string;
  description: string;
  publishedAt: string;
  source: { id: string; name: string };
  title: string;
  urlToImage: string;
  url: string;
  id: string;
}

export interface CardProps {
  card: Article;
}

// export interface GET200_Articles {
//   articles: Article[];
// }

export enum SortType {
  relevancy = 'relevancy',
  popularity = 'popularity',
  publishedAt = 'publishedAt',
}
