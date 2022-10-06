// ---------------partie require-------------------------------
const express = require('express');
const authController = require('../controllers/auth.controller');
const validEmail = require('../middlewares/email');
const validPassword = require('../middlewares/password');
const router = express.Router();

router.post("/register",validEmail,validPassword,authController.signup);
// router.post('/login', authController.login);
// router.post('/logout', authCtrl.logout);
// router.post('/refrech_token', userCtrl.generateAccessToken);

module.exports = router;