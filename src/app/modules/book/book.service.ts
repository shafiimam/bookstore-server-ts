import ApiError from '../../../errors/ApiError';
import { IGenericResponse } from '../../../interfaces/common';
import { bookSearchableFields } from './book.constant';
import { IBook, IBookFilters } from './book.interface';
import Book from './book.model';

const getAllBooks = async (
  filters: IBookFilters,
): Promise<IGenericResponse<IBook[]>> => {
  const { searchTerm, ...filtersData } = filters;
  console.log('🚀 ~ file: book.service.ts:10 ~ filters:', filters);

  const andConditions = [];
  // Search needs $or for searching in specified fields
  if (searchTerm) {
    andConditions.push({
      $or: bookSearchableFields.map(field => ({
        [field]: {
          $regex: searchTerm,
          $options: 'i',
        },
      })),
    });
  }

  if (Object.keys(filtersData).length) {
    andConditions.push({
      $and: Object.entries(filtersData).map(([field, value]) => ({
        [field]: value,
      })),
    });
  }

  const whereConditions =
    andConditions.length > 0 ? { $and: andConditions } : {};

  const books = await Book.find(whereConditions);
  return {
    data: books,
  };
};

const createNewBook = async (book: IBook): Promise<IGenericResponse<IBook>> => {
  const createdBook = await Book.create(book);
  return {
    data: createdBook,
  };
};

const updateBook = async (id: string, payload: Partial<IBook>) => {
  const isExist = await Book.findOne({ _id: id });
  if (!isExist) {
    throw new ApiError(404, 'Book not found');
  }

  const result = await Book.findByIdAndUpdate(id, payload, {
    new: true,
  });
  return result;
};

export default {
  getAllBooks,
  createNewBook,
  updateBook,
};
