const express = require('express');
const { signupUser, loginUser, logoutUser } = require('../Controller/authController');
const route = express.Router();


route.post('/signup',signupUser);
route.post('/login',loginUser);
route.get('/logout',logoutUser);



module.exports = route ;