import expres from 'express';
import bookController from './book.controller';

const bookRouter = expres.Router();

bookRouter.get('/', bookController.getAllBooks);
bookRouter.post('/', bookController.createBook);
bookRouter.put('/:id', bookController.updateBook);

export default bookRouter;
