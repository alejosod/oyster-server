export default (req, res, next) => {
  const {
    session: { user } = {},
  } = req;

  if (user) next();
  else {
    const error = new Error('User not logged in');
    next(error);
  }
};
