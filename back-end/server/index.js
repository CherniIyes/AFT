const express = require('express');
const app = express();
const cors = require("cors");
const milkRoutes = require('../Routes/milkRoutes.js')
const expensesRoutes = require('../Routes/expensesRoutes.js')
const SalesRoutes = require('../Routes/SalesRoutes.js')
const PORT = 6464;


app.use(cors())
app.use(express.json())
app.use("/sales", SalesRoutes)
app.use('/milk', milkRoutes);
app.use("/exp",expensesRoutes)



app.get('/', (req, res) => {
      res.send('Server Listening');
})
app.listen(PORT, () => {
      console.log(`listen on http://localhost:${PORT}`);
});