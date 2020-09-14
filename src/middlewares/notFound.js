export default (req, res, next) => {
  const {
    errors: { general },
    createError,
  } = req;

  next(createError(general.notFound));
};
