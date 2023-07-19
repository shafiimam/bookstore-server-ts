import { Model } from 'mongoose';

export type IBook = {
  title: string;
  author: string[];
  genre: string;
  publishedAt: Date;
  coverImage: string;
};

export type BookModel = Model<IBook, object, object>;
export type IBookFilters = {
  searchTerm?: string;
};
