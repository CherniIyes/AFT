const db = require('../database/index.js');

// Get all milk entries
exports.getAllMilk = (callback) => {
    const query = 'SELECT * FROM milk';
    db.query(query, callback);
};

// Get a single milk entry by ID
exports.getMilkById = (id, callback) => {
    const query = 'SELECT * FROM milk WHERE id = ?';
    db.query(query, id, callback);
};

// Add a new milk entry
exports.addMilk = (milkData, callback) => {
    const query = 'INSERT INTO milk SET ?';
    db.query(query, milkData, callback);
};

// Update a milk entry
exports.updateMilk = (id, milkData, callback) => {
    const query = 'UPDATE milk SET ? WHERE id = ?';
    db.query(query, [milkData, id], callback);
};

// Delete a milk entry
exports.deleteMilk = (id, callback) => {
    const query = 'DELETE FROM milk WHERE id = ?';
    db.query(query, id, callback);
};
