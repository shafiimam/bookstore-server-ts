"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const catchAsync_1 = __importDefault(require("../../../shared/catchAsync"));
const book_service_1 = __importDefault(require("./book.service"));
const sendResponse_1 = __importDefault(require("../../../shared/sendResponse"));
const pick_1 = __importDefault(require("../../../shared/pick"));
const book_constant_1 = require("./book.constant");
const pagination_1 = require("../../../constants/pagination");
const getAllBooks = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const filters = (0, pick_1.default)(req.query, book_constant_1.bookFilterableFields);
    const paginationOptions = (0, pick_1.default)(req.query, pagination_1.paginationFields);
    const allBooks = yield book_service_1.default.getAllBooks(filters, paginationOptions);
    (0, sendResponse_1.default)(res, {
        statusCode: 200,
        success: true,
        data: allBooks.data,
        meta: allBooks.meta,
        message: 'books fetched successfully',
    });
}));
const createBook = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const book = req.body;
    const createdBook = yield book_service_1.default.createNewBook(book);
    (0, sendResponse_1.default)(res, {
        statusCode: 201,
        success: true,
        data: createdBook,
        message: 'book created successfully',
    });
}));
const updateBook = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log('🚀 ~ file: book.controller.ts:updateBook ~ req:', req.body);
    const { id } = req.params;
    const book = req.body;
    const updatedBook = yield book_service_1.default.updateBook(id, book);
    (0, sendResponse_1.default)(res, {
        statusCode: 200,
        success: true,
        data: updatedBook,
        message: 'book updated successfully',
    });
}));
const getBookById = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const book = yield book_service_1.default.getBookById(id);
    (0, sendResponse_1.default)(res, {
        statusCode: 200,
        success: true,
        data: book,
        message: 'book fetched successfully',
    });
}));
const createReview = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { review } = req.body;
    const createdReview = yield book_service_1.default.createReview(id, review);
    (0, sendResponse_1.default)(res, {
        statusCode: 201,
        success: true,
        data: createdReview,
        message: 'review created successfully',
    });
}));
exports.default = {
    getAllBooks,
    createBook,
    updateBook,
    getBookById,
    createReview,
};
