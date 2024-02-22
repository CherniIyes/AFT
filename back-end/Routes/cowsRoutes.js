const express = require('express');
const router = express.Router();
const cowController = require('../controllers/cowController');

// Routes for CRUD operations on cows
router.get('/getall', cowController.getAllCows);
router.post('/add', cowController.createCow);
router.get('/getbyid/:id', cowController.getCowById);
router.put('/update/:id', cowController.updateCow);
router.delete('/delete/:id', cowController.deleteCow);

module.exports = router;
