const express = require('express');
const app = express();
const cors = require("cors");
const milkRoutes = require('../Routes/milkRoutes.js')
const expensesRoutes = require('../Routes/expensesRoutes.js')
const SellsRoutes = require('../Routes/SellsRoutes.js')
const PORT = 6464;


app.use(cors())
app.use(express.json())
app.use(expensesRoutes)
app.use("/sells", SellsRoutes)



app.get('/', (req, res) => {
      res.send('Server Listening');
})
app.listen(PORT, () => {
      console.log(`listen on http://localhost:${PORT}`);
});