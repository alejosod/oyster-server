import express from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import morgan from 'morgan';
import passport from 'passport';

import './utils/passport';
import { errorConfiguration, notFound, handleErrors } from './middlewares';
import { authController } from './modules';

dotenv.config();
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan('combined'));
app.use(passport.initialize({}));

app.use(errorConfiguration);
app.use('/api/v1', authController);
app.use(handleErrors);
app.use(notFound);

app.listen(8080, () => {
  console.log('server started at http://localhost:8000');
});
