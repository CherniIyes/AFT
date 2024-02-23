const express = require('express');
const app = express();
const cors = require("cors");
const PORT = 6464;
const cowsRouter = require ('../Routes/cowsRoutes')

app.use(cors());
app.use(express.json());

app.use('/cows', cowsRouter);
app.get('/', (req, res) => {
  res.send('Server Listening');
});

app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});
