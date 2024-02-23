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
    try {
        // Extract milk data from request body
        const { day, quantity, price } = req.body;

        // Create an object with the milk data
        const milkData = {
            day,
            quantity,
            price
        };

        // Call the addMilk function from the milk model
        milkModel.addMilk(milkData, (err, result) => {
            if (err) {
                console.error('Error adding milk:', err);
                res.status(500).json({ error: 'Failed to add milk' });
            } else {
                res.status(201).json({ message: 'Milk added successfully', id: result.insertId });
            }
        });
    } catch (error) {
        console.error('Error adding milk:', error);
        res.status(500).json({ error: 'Failed to add milk' });
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
