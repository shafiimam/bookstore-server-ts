import { Schema, model } from 'mongoose';
import { IBook } from './book.interface';

const bookSchema = new Schema<IBook>(
  {
    title: String,
    author: [String],
    genre: String,
    publishedAt: Date,
    coverImage: String,
    reviews: {
      type: [String],
      default: [],
    },
  },
  {
    timestamps: true,
  },
);

const Book = model<IBook>('Book', bookSchema);

export default Book;
