const express = require('express');
const router = express.Router();
const userController = require('../Controllers/userControllers.js');

router.get('/get/:email', userController.getUserByEmail);
router.get('/get', userController.getUsers);
router.post('/login', userController.loginUser);
router.post('/register', userController.addUser);

module.exports = router;
