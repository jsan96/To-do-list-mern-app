const express = require('express');
const user = express.Router();
const {createUser} = require('../controllers/userControllers');


user.post('/register',createUser)


module.exports = user;
