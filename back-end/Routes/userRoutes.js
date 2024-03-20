const express = require('express');
const router = express.Router();
const userController = require('../Controllers/userControllers.js');

router.get('/get/:email', userController.getUserByEmail);
router.get('/get', userController.getUsers);
router.post('/login', userController.login);
router.post('/register', userController.register);
router.put('/update/:id', userController.update);


module.exports = router;
