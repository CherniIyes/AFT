const express = require('express');
const app = express();
const cors = require("cors");
const PORT = 6464;
const admin = require('firebase-admin');


app.use(cors());
app.use(express.json());

app.use(express.json())

const milkRoutes = require('../Routes/milkRoutes.js')
const expensesRoutes = require('../Routes/expensesRoutes.js')
const SalesRoutes = require('../Routes/SalesRoutes.js')
const cowsRouter = require ('../Routes/cowsRoutes')
const articlesRoutes=require('../Routes/articlesRoutes.js')
const article2Routes=require ('../Routes/article2Routes.js')
const userRoutes = require('../Routes/userRoutes.js');







app.use("/sales", SalesRoutes)
app.use('/milk', milkRoutes);
app.use('/articles', articlesRoutes);
app.use('/article2', article2Routes);

  

app.use("/exp", expensesRoutes)
app.use('/cows', cowsRouter);
app.use('/user', userRoutes);

app.listen(PORT, () => {
      console.log(`Server listening on http://localhost:${PORT}`);
});
