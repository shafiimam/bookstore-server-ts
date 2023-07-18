import { Schema, model } from 'mongoose'
import { IBook } from './book.interface'

const bookSchema = new Schema<IBook>({
  title: String,
  author: [String],
  genre: String,
  publishedAt: Date,
})

const Book = model<IBook>('Book', bookSchema)

export default Book
