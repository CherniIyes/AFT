const express = require('express');
const router = express.Router();
const milkController = require('../Controllers/milkController.js');

router.get('/', milkController.getAllMilk);
router.get('/:id', milkController.getMilkById);
router.post('/add', milkController.addMilk);
router.put('/update/:id', milkController.updateMilk);
router.delete('/:id', milkController.deleteMilk);

module.exports = router;
