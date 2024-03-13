const connection = require('../database/index');
const bcrypt = require('bcrypt');
const saltRounds = 10;

const getAll = (callback) => {
      const query = 'SELECT * FROM user';
      connection.query(query, (err, result) => {
            if (err) {
                  return callback(err, null);
            }
            return callback(null, result);
      });
};

const getUser = (emailTerm, callback) => {
      const query = 'SELECT * FROM user WHERE email = ?';
      connection.query(query, [emailTerm], (err, result) => {
            if (err) {
                  return callback(err, null);
            }
            return callback(null, result);
      });
};

const register = async (user, callback) => {
      try {
            // Hash the password before storing it in the database
            const hashedPassword = await bcrypt.hash(user.password, saltRounds);

            // Save the user with the hashed password in the database
            const query = 'INSERT INTO user (username, email, password) VALUES (?, ?, ?)';
            connection.query(query, [user.username, user.email, hashedPassword], (err) => {
                  if (err) {
                        return callback(err, false);
                  }

                  // Registration successful
                  return callback(null, true);
            });
      } catch (error) {
            return callback(error, false);
      }
};

const login = async (email, password, callback) => {
      try {
            getUser(email, (err, user) => {
                  if (err) {
                        return callback(err, false);
                  }

                  if (!user || user.length === 0) {
                        // User not found
                        return callback(null, false);
                  }

                  // Compare the entered password with the hashed password from the database
                  bcrypt.compare(password, user[0].password, (compareErr, passwordMatch) => {
                        if (compareErr) {
                              return callback(compareErr, false);
                        }

                        if (passwordMatch) {
                              // Passwords match, login successful
                              return callback(null, user);
                        } else {
                              // Passwords do not match
                              return callback(null, false);
                        }
                  });
            });
      } catch (error) {
            return callback(error, false);
      }
};



module.exports = { getUser, getAll, login, register };
