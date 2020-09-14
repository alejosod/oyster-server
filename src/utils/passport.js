import passport from 'passport';
import LocalStrategy from 'passport-local';
import bcrypt from 'bcrypt';

import { User } from '../modules';

passport.use(new LocalStrategy.Strategy(async (username, password, done) => {
  console.log(username, password);
  try {
    const user = await User.findByName(username);

    if (!user) return done(null, false);
    if (!bcrypt.compareSync(password, user.password)) return done(null, false);

    return done(null, user);
  } catch (error) {
    return done(error, null);
  }
}));
