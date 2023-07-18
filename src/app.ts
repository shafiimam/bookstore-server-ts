import cors from 'cors';
import express, { Application, Request, Response } from 'express';
import bookRouter from './app/modules/book/book.route';
import globalErrorHandler from './app/middlewares/globalErrorHandler';

const app: Application = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// application routes
app.use('/api/v1/book', bookRouter);

app.use(globalErrorHandler);
app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});

export default app;
