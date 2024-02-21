const mysql = require('mysql2');
const config = {
      host: 'localhost',
      user: 'root',
      password: 'root',
      database: 'aft'
};

const connection = mysql.createConnection(config)
connection.connect((err) => {
      if (err) {
            console.log(err)
      }
      else {
            console.log("db is connected ")
      }
})



module.exports = connection;