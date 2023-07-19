import expres from 'express';
import bookController from './book.controller';

const bookRouter = expres.Router();

bookRouter.get('/', bookController.getAllBooks);
bookRouter.get('/:id', bookController.getBookById);
bookRouter.put('/:id', bookController.updateBook);
bookRouter.post('/', bookController.createBook);
bookRouter.post('/review/:id', bookController.createReview);

export default bookRouter;
