const express = require('express');
const app = express();
const cors = require("cors");
const PORT = 6464;
const admin = require('firebase-admin');




const milkRoutes = require('../Routes/milkRoutes.js')
const expensesRoutes = require('../Routes/expensesRoutes.js')
const SalesRoutes = require('../Routes/SalesRoutes.js')
const cowsRouter = require('../Routes/cowsRoutes')
const userRoutes = require('../Routes/userRoutes.js');






app.use(cors());
app.use(express.json());
app.get('/', (req, res) => {
      res.send('Server Listening');
});
app.use(express.json())
app.use("/sales", SalesRoutes)
app.use('/milk', milkRoutes);
app.use("/exp", expensesRoutes)
app.use('/cows', cowsRouter);
app.use('/cows', cowsRouter);
app.use('/user', userRoutes);

app.listen(PORT, () => {
      console.log(`Server listening on http://localhost:${PORT}`);
});
