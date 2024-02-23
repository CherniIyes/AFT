const express = require('express');
const app = express();
const cors = require("cors");
const PORT = 6464;
const milkRoutes = require('../Routes/milkRoutes.js')
const expensesRoutes = require('../Routes/expensesRoutes.js')
const SalesRoutes = require('../Routes/SalesRoutes.js')
const cowsRouter = require('../Routes/cowsRoutes')

app.use(cors());
app.use(express.json());



app.get('/', (req, res) => {
      res.send('Server Listening');
});
app.use(cors())
app.use(express.json())
app.use("/sales", SalesRoutes)
app.use('/milk', milkRoutes);
app.use("/exp", expensesRoutes)
app.use('/cows', cowsRouter);

app.get('/', (req, res) => {
      res.send('Server Listening');
})
app.listen(PORT, () => {
      console.log(`Server listening on http://localhost:${PORT}`);
});
