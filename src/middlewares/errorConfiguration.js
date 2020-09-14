import { ServerError, errors } from '../utils';

export default (req, res, next) => {
  req.createError = (error) => new ServerError(error);
  req.errors = errors;

  next();
};
