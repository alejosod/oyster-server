import passport from 'passport';

export default (req, res, next) => {
  const {
    errors: {
      authorization,
    },
    createError,
  } = req;
  passport.authenticate(
    'jwt',
    { session: false },
    (err, user, info) => {
      if (info) return next(createError(authorization.notAuthorized));
      if (err) return next(err);
      if (!user) return next(createError(authorization.notAuthorized));

      req.user = user;
      next();
    },
  )(req, res, next);
};
