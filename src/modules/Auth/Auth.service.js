import passport from 'passport';
import jwt from 'jsonwebtoken';

const login = (req, res, next) => {
  console.log(req.body);
  passport.authenticate('local', { session: false }, (error, user) => {
    console.log('here');
    if (error || !user) {
      next(error);
    } else {
      const payload = {
        sub: user.username,
        exp: Date.now() + parseInt(process.env.JWT_LIFETIME, 10),
        username: user.username,
      };

      const token = jwt.sign(
        JSON.stringify(payload),
        process.env.JWT_SECRET,
        { algorithm: process.env.JWT_ALGORITHM },
      );
      res.json({ data: { token } });
    }
  })(req, res, next);
};

export default {
  login,
};
