import { Request, Response } from 'express';
import { IBook } from './book.interface';
import catchAsync from '../../../shared/catchAsync';
import bookService from './book.service';
import sendResponse from '../../../shared/sendResponse';
import pick from '../../../shared/pick';
import { bookFilterableFields, bookSearchableFields } from './book.constant';

const getAllBooks = catchAsync(async (req: Request, res: Response) => {
  const filters = pick(req.query, bookFilterableFields);
const paginationOptions = pick(req.query, paginationFields);
const allBooks = await bookService.getAllBooks(filters, paginationOptions);
  sendResponse<IBook[]>(res, {
    statusCode: 200,
    success: true,
    data: allBooks.data,
    message: 'books fetched successfully',
  });
});

const createBook = catchAsync(async (req: Request, res: Response) => {
  const book = req.body;
  const createdBook = await bookService.createNewBook(book);
  sendResponse<IBook>(res, {
    statusCode: 201,
    success: true,
    data: createdBook.data,
    message: 'book created successfully',
  });
});

const updateBook = catchAsync(async (req: Request, res: Response) => {
  console.log('🚀 ~ file: book.controller.ts:updateBook ~ req:', req.body);
  const { id } = req.params;
  const book = req.body;
  const updatedBook = await bookService.updateBook(id, book);
  sendResponse<IBook>(res, {
    statusCode: 200,
    success: true,
    data: updatedBook,
    message: 'book updated successfully',
  });
});

export default {
  getAllBooks,
  createBook,
  updateBook,
};
