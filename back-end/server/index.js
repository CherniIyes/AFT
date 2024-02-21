const express = require('express');
const app = express();
const cors = require("cors");
const PORT = 6464;



app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
      res.send('Server Listening');
})
app.listen(PORT, () => {
      console.log(`listen on http://localhost:${PORT}`);
}); W