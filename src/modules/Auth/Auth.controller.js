import express from 'express';
import UserService from '../User';

const authController = express.Router();

const postAuth = async (req, res) => {
  const {
    body: {
      email,
      password,
    },
  } = req;

  if (!email || !password) res.status(401).send();

  const user = UserService.validate({ email, password })
};
