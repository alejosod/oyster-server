import passport from 'passport';

export default (req, res, next) => {
  passport.authenticate(
    'jwt',
    { session: false },
    (err, user, info) => {

    },
  );
};
