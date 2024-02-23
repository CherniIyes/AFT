const express = require('express');
const app = express();
const cors = require("cors");
const milkRoutes = require('../Routes/milkRoutes.js')
const expensesRoutes = require('../Routes/expensesRoutes.js')
const SalesRoutes = require('../Routes/SalesRoutes.js')
const PORT = 6464;


app.use(cors())
app.use(express.json())
<<<<<<< HEAD

app.use('/milk', milkRoutes);
app.use("/exp",expensesRoutes)


=======
app.use("/sales", SalesRoutes)
app.use('/milk', milkRoutes);
app.use("/exp",expensesRoutes)

>>>>>>> 54041af69af13847c3fde264a32dd7e8677e221a


app.get('/', (req, res) => {
      res.send('Server Listening');
})
app.listen(PORT, () => {
      console.log(`listen on http://localhost:${PORT}`);
});