const connection = require("../database/index.js")


module.exports = {
      getall: (callback) => {
            var sql = "SELECT * FROM expenses"
            connection.query(sql, (err, results) => {
                  callback(err, results)
            })
      },
      add: (data, callback) => {
            const sql = "INSERT INTO expenses SET ?"
            connection.query(sql, [data], (err, results) => {
                  callback(err, results)
            })
      },
      update: (data, id, callback) => {
            const sql = "UPDATE expenses SET `handwork`=?, `fodder`=?, `bills`=?, `medicalexpenses`=?, `hay`=? WHERE id=? "
            connection.query(sql, [data.handwork, data.fodder, data.bills, data.medicalexpenses, data.hay, id], (err, results) => {
                  callback(err, results);
            });
      },
      DELETE: (id, callback) => {
            const sql = "DELETE FROM expenses WHERE id=?"
            connection.query(sql, [id], (err, results) => {
                  callback(err, results)
            })
      },

      getOne: (id, callback) => {
            const sql = "SELECT *  FROM expenses WHERE id=?"
            connection.query(sql, [id], (err, results) => {
                  callback(err, results)
            })
      }

}