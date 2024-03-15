const express = require('express');
const app = express();
const cors = require("cors");
const PORT = 4646;
const admin = require('firebase-admin');
const articlesRoutes = require('../Routes/articlesRoutes.js')
const userRoutes = require('../Routes/userRoutes.js');







app.use(cors());
app.use(express.json());
app.use('/articles', articlesRoutes);
app.use('/user', userRoutes);

app.listen(PORT, () => {
      console.log(`Server listening on http://localhost:${PORT}`);
});
