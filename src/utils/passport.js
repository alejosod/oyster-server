import passportJWT from 'passport-jwt';
import { User } from '../modules';

const {
  Strategy: JWTStrategy,
  ExtractJwt: ExtractJWT,
} = passportJWT;

const options = {
  jwtFromRequest: ExtractJWT.fromAuthHeaderWithScheme(process.env.JWT_SCHEME),
  secretOrKey: process.env.JWT_SECRET_OR_KEY,
};

async function passportCallback(jwtPayload, done) {
  try {
    const user = await User.validate(jwtPayload);

    if (user) done(null, user);
    else done(null, false);
  } catch (e) {
    done(e, false);
  }
}

const passportJWTStrategy = new JWTStrategy(options, passportCallback);

export default (passport) => {
  passport.use(passportJWTStrategy);

  return passport;
};
