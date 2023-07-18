"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const book_controller_1 = __importDefault(require("./book.controller"));
const bookRouter = express_1.default.Router();
bookRouter.get('/', book_controller_1.default.getAllBooks);
bookRouter.post('/', book_controller_1.default.createBook);
bookRouter.put('/:id', book_controller_1.default.updateBook);
exports.default = bookRouter;
