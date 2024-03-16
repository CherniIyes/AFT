const express = require('express');
const router = express.Router();
const milkController = require('../Controllers/milkController.js');

router.get('/', milkController.getAllMilk);
router.get('/getone/:id', milkController.getMilkById);
router.post('/add', milkController.addMilk);
router.put('/update/:id', milkController.updateMilk);
router.delete('/delete/:id', milkController.deleteMilk);

module.exports = router;
