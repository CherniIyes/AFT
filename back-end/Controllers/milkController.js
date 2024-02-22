const moment = require('moment');

const milkModel = require('../Models/milkModel.js');


// Get all milk entries
exports.getAllMilk = (req, res) => {
    milkModel.getAllMilk((err, result) => {
        if (err) {
            console.log(err);
            res.status(500).json({ message: 'Internal Server Error' });
        } else {
            res.json(result);
        }
    });
};

// Get a single milk entry by ID
exports.getMilkById = (req, res) => {
    const id = req.params.id;
    milkModel.getMilkById(id, (err, result) => {
        if (err) {
            console.log(err);
            res.status(500).json({ message: 'Internal Server Error' });
        } else if (result.length === 0) {
            res.status(404).json({ message: 'Milk entry not found' });
        } else {
            res.json(result[0]);
        }
    });
};

// Add a new milk entry
exports.addMilk = async (req, res) => {
    const { day, quantity, price } = req.body;
  
    // Convert the date format using Moment.js
    const formattedDay = moment(day).format('YYYY-MM-DD');
  
    try {
      const result = await db.query('INSERT INTO milk SET ?', { day: formattedDay, quantity, price });
      res.status(201).json({ message: 'Milk entry created successfully', id: result.insertId });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal server error' });
    }
  };
  

// Update a milk entry
exports.updateMilk = (req, res) => {
    const id = req.params.id;
    const milkData = req.body;
    milkModel.updateMilk(id, milkData, (err, result) => {
        if (err) {
            console.log(err);
            res.status(500).json({ message: 'Internal Server Error' });
        } else if (result.affectedRows === 0) {
            res.status(404).json({ message: 'Milk entry not found' });
        } else {
            res.json({ message: 'Milk entry updated successfully' });
        }
    });
};

// Delete a milk entry
exports.deleteMilk = (req, res) => {
    const id = req.params.id;
    milkModel.deleteMilk(id, (err, result) => {
        if (err) {
            console.log(err);
            res.status(500).json({ message: 'Internal Server Error' });
        } else if (result.affectedRows === 0) {
            res.status(404).json({ message: 'Milk entry not found' });
        } else {
            res.json({ message: 'Milk entry deleted successfully' });
        }
    });
};
