import express from 'express';
import AuthService from './Auth.service';

const authController = express.Router();

authController.post('/login', AuthService.login);

export default authController;
