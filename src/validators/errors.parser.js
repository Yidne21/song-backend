import { validationResult } from 'express-validator';
import httpStatus from 'http-status';

const parser = (req, res, next) => {
  const validationErrors = validationResult(req);

  if (validationErrors.isEmpty()) {
    return next();
  }

  return res.status(httpStatus.BAD_REQUEST).json(validationErrors);
};

export default parser;
