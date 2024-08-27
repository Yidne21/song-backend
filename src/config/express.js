/* eslint-disable no-unused-vars */
import express from 'express';
import bodyParser from 'body-parser';
import compress from 'compression';
import cors from 'cors';
import helmet from 'helmet';
import routes from './routes';
import APIError from '../errors/APIError';
import httpStatus from 'http-status';
import * as environments from '../config/environments';

const app = express();

app.use(bodyParser.json());
app.use(compress());
app.use(helmet());
app.use(cors());

app.use('/api', routes);

//TODO: Catch unknown endpoints and throw a 404 error

// Catch errors passed from controllers
app.use((err, req, res, next) => {
  if (!(err instanceof APIError)) {
    const error = new APIError(
      err.message || 'An unknown error occured',
      httpStatus.INTERNAL_SERVER_ERROR
    );
    return next(error);
  }
  return next(err);
});

app.use((err, req, res, next) => {
  if (err.status === httpStatus.INTERNAL_SERVER_ERROR) {
    console.log(err);
  }

  res.status(err.status).send({
    message: err.isPublic ? err.message : httpStatus[err.status],
    stack: environments.NODE_ENV === 'development' ? err.stack : null,
  });
});
export default app;
