const express = require('express');
const app = express();
const cors = require("cors");
const milkRoutes = require ('../Routes/milkRoutes.js')


const PORT = 6464;

app.use(cors())
app.use(express.json())
app.use('/milk', milkRoutes);

app.listen(PORT, () => {
      console.log(`listen on http://localhost:${PORT}`);
});