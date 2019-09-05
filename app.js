const express = require('express');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

require('dotenv').config();

const port = process.env.PORT || 3002;

app.get('/test', (req, res) => {
  res.status(200).send({ message: 'OK' });
});

app.listen(port, () => {
  console.log(`Server running on port ${port} ...`);
});
