const db = require('../database/index.js');

// Get all milk entries
exports.getAllMilk = (callback) => {
    const query = 'SELECT * FROM milk';
    db.query(query, callback);
};





// Get a single milk entry by ID
exports.getMilkById = (userId, callback) => {
    const sql = "SELECT * FROM milk WHERE userId=?";
    db.query(sql, [userId], (err, results) => {
        if (err) {
            console.error("Error fetching milk by userId:", err);
            callback(err, null);
            return;
        }
        callback(null, results);
    });
};





exports.addMilk = (data, callback) => {
    const sql = "INSERT INTO milk SET ?";
    db.query(sql, [data], (err, results) => {
        callback(err, results);
    });
},

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
