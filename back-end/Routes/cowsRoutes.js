const express = require('express');
const router = express.Router();
const cowController = require('../controllers/cowController');

// Routes for CRUD operations on cows
router.get('/', cowController.getAllCows);
router.post('/', cowController.createCow);
router.get('/:id', cowController.getCowById);
router.put('/:id', cowController.updateCow);
router.delete('/:id', cowController.deleteCow);

module.exports = router;
