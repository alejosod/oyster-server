import GeneralError from '../utils/error';

const handleErrors = (err, req, res, next) => {
  if (err instanceof GeneralError) {
    return res.status(err.statusCode).json({
      status: 'error',
      message: err.message,
    });
  }

  return res.status(500).json({
    status: 'error',
    message: err.message,
  });
};

export default handleErrors;
