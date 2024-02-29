const User = require('../Models/userModels.js');
const bcrypt = require('bcrypt');


const getUsers = (req, res) => {
    User.getAll((err, result) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.status(200).json(result);
        }
    });
};

const getUserByEmail = (req, res) => {
    const searchTerm = req.params.email;
    if (!searchTerm) {
        return res.status(400).send("email parameter is missing");
    }

    User.getUser(searchTerm, (err, result) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.status(200).json(result);
        }
    });
};

const register = async (req, res) => {
    const { username, email, password } = req.body;

    if (!username || !email || !password) {
        return res.status(400).send("Username, email, and password are required");
    }

    const user = { username, email, password };

    User.register(user, (err, success) => {
        if (err) {
            return res.status(500).send(err);
        }

        if (success) {
            return res.status(201).send("User registered successfully");
        } else {
            return res.status(400).send("Registration failed");
        }
    });
};

const login = async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).send("Email and password are required");
    }

    User.login(email, password, (err, success) => {
        if (err) {
            console.error("Login error:", err);
            return res.status(500).send(err);
        }

        if (success) {
            return res.status(200).send("Login successful");
        } else {
            return res.status(401).send("Login failed. Check your email and password.");
        }
    });
};


module.exports = { getUsers, getUserByEmail, register, login };
