/* eslint-disable @typescript-eslint/no-unused-vars */
import express, { Express, NextFunction, Request, Response } from 'express';
import { HttpError } from 'http-errors';
import logger from './config/logger';

const app: Express = express();

app.use('/', (req: Request, res: Response) => {
  res.status(200).json({ message: 'Welcome to Zencart' });
});

app.use(
  (err: HttpError, req: Request, res: Response, next: NextFunction): void => {
    logger.error(err.message);
    const statusCode = err.statusCode || 500;
    res.status(statusCode).json({
      errors: [{ type: err.name, msg: err.message, path: '', location: '' }],
    });
  },
);

export default app;
