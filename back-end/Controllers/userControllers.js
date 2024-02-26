const User = require('../Models/userModels.js');
const bcrypt = require('bcrypt');
const { FIREBASE_APP, FIREBASE_AUTH } = require('../firebaseconfig');

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

const addUser = async (req, res) => {
    try {
        const { username, email, password } = req.body;

        // Hash the password before storing it
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create a new user in Firebase Authentication
        const authUser = await FIREBASE_AUTH.createUserWithEmailAndPassword(email, password);

        // Create a new user document in your MySQL database
        const newUser = {
            username: username,
            email: email,
            password: hashedPassword,
        };

        await User.register(newUser, (err, result) => {
            if (err) {
                // If there's an error creating the user document in MySQL, delete the user from Firebase Authentication
                FIREBASE_AUTH.currentUser.delete();
                res.status(500).json({ error: 'Internal server error' });
            } else {
                res.status(201).json({ message: 'User registered successfully' });
            }
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;

        // Sign in with Firebase Authentication
        await FIREBASE_AUTH.signInWithEmailAndPassword(email, password);

        // Get user details from your MySQL database
        User.login(email, password, (err, result) => {
            if (err) {
                res.status(401).json({ message: 'Invalid credentials' });
            } else {
                // Here you can generate a token, set a session, or handle login success as needed
                res.status(200).json({ message: 'Login successful', user: result });
            }
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

module.exports = { getUsers, getUserByEmail, addUser, loginUser };
