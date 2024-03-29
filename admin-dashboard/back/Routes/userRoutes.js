const express = require('express');
const router = express.Router();
const userController = require('../Controllers/userControllers.js');

router.get('/get/:email', userController.getUserByEmail);
router.get('/get', userController.getUsers);
router.get('/totalUsers', userController.getTotalUsers);
router.post('/login', userController.login);
router.put('/ban/:id', userController.banUser);
router.put('/unban/:id', userController.unbanUser);
router.post('/register', userController.register);
router.delete('/del/:id', userController.deleteUser);

module.exports = router;
