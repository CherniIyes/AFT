const connection = require("../database/index.js");

module.exports = {
  getAll: (callback) => {
    var sql = "SELECT * FROM sales";
    connection.query(sql, (err, results) => {
      callback(err, results);
    });
  },
  Add: (data, callback) => {
      const sql = "INSERT INTO sales SET ?";
      console.log("Adding data:", data);
      connection.query(sql, [data], (err, results) => {
         if (err) {
            console.error("Error in Add function:", err);
         }
         callback(err, results);
      });
   },
  Update: (data, id, callback) => {
    const sql =
      "UPDATE sales SET `product`=?, `price`=?, `date`=?, `product details`=? WHERE id=?";
    connection.query(
      sql,
      [data.product, data.price, data.date, data['product details'], id],
      (err, results) => {
        callback(err, results);
      }
    );
  },
  DELETE: (id, callback) => {
    const sql = "DELETE FROM sales WHERE id=?";
    connection.query(sql, [id], (err, results) => {
      callback(err, results);
    });
  },

  getOne: (id, callback) => {
    const sql = "SELECT * FROM sales WHERE id=?";
    connection.query(sql, [id], (err, results) => {
      callback(err, results);
    });
  },
};
