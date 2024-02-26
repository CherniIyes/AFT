const express = require('express');
const router = express.Router();
const cowController = require('../Controllers/cowsControllers');

// Routes for CRUD operations on cows
router.get('/getall', cowController.getAllCows);
router.post('/add', cowController.createCow);
router.get('/getbyid/:id', cowController.getCowById);
router.put('/update/:id', cowController.updateCow);
router.delete('/delete/:id', cowController.deleteCow);

module.exports = router;
// id, cow_number, cow_race, artificial_insemination_date, artificial_insemination_triggered, return_in_heat_control_date, pregnancy_detection_date, drying_off_date, calving_and_delivery_date

