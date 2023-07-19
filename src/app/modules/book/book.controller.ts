import { Request, Response } from 'express';
import { IBook } from './book.interface';
import catchAsync from '../../../shared/catchAsync';
import bookService from './book.service';
import sendResponse from '../../../shared/sendResponse';
import pick from '../../../shared/pick';
import { bookFilterableFields } from './book.constant';
import { paginationFields } from '../../../constants/pagination';

const getAllBooks = catchAsync(async (req: Request, res: Response) => {
  const filters = pick(req.query, bookFilterableFields);
  const paginationOptions = pick(req.query, paginationFields);
  const allBooks = await bookService.getAllBooks(filters, paginationOptions);
  sendResponse<IBook[]>(res, {
    statusCode: 200,
    success: true,
    data: allBooks.data,
    meta: allBooks.meta,
    message: 'books fetched successfully',
  });
});

const createBook = catchAsync(async (req: Request, res: Response) => {
  const book = req.body;
  const createdBook = await bookService.createNewBook(book);
  sendResponse<IBook>(res, {
    statusCode: 201,
    success: true,
    data: createdBook,
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

const getBookById = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const book = await bookService.getBookById(id);
  sendResponse<IBook>(res, {
    statusCode: 200,
    success: true,
    data: book,
    message: 'book fetched successfully',
  });
});

const createReview = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const { review } = req.body;
  const createdReview = await bookService.createReview(id, review);
  sendResponse<IBook>(res, {
    statusCode: 201,
    success: true,
    data: createdReview,
    message: 'review created successfully',
  });
});

const deleteBook = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const deletedBook = await bookService.deleteBook(id);
  sendResponse<IBook>(res, {
    statusCode: 200,
    success: true,
    data: deletedBook,
    message: 'book deleted successfully',
  });
});

const editBook = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const book = req.body;
  const updatedBook = await bookService.editBook(id, book);
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
  getBookById,
  createReview,
  deleteBook,
  editBook,
};
