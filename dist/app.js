"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cors_1 = __importDefault(require("cors"));
const express_1 = __importDefault(require("express"));
const book_route_1 = __importDefault(require("./app/modules/book/book.route"));
const globalErrorHandler_1 = __importDefault(require("./app/middlewares/globalErrorHandler"));
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
// application routes
app.use('/api/v1/book', book_route_1.default);
app.use(globalErrorHandler_1.default);
app.get('/', (req, res) => {
    res.send('Hello World!');
});
exports.default = app;
