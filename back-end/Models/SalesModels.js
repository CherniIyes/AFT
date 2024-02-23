const connection = require("../database/index.js")


module.exports = {
      getAll: (callback) => {
            var sql = "SELECT * FROM sales"
            connection.query(sql, (err, results) => {
                  callback(err, results)
            })
      },
      Add: (data, callback) => {
            const sql = "INSERT INTO sales SET ?"
            connection.query(sql, [data], (err, results) => {
                  callback(err, results)
            })
      },
      Update: (data, id, callback) => {
            const sql = "UPDATE sales SET `product`=?, `price`=?, `image`=?, `product details`=?,  WHERE id=? "
            connection.query(sql, [data.handwork, data.fodder, data.bills, data.medicalexpenses, data.hay, id], (err, results) => {
                  callback(err, results);
            });
      },
      DELETE: (id, callback) => {
            const sql = "DELETE FROM sales WHERE id=?"
            connection.query(sql, [id], (err, results) => {
                  callback(err, results)
            })
      },

      getOne: (id, callback) => {
            const sql = "SELECT *  FROM sales WHERE id=?"
            connection.query(sql, [id], (err, results) => {
                  callback(err, results)
            })
      }

}