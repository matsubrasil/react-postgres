const express = require('express');
const rootController = require('./_controllers');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

require('dotenv').config();

const port = process.env.PORT || 3002;

app.get('/test', (req, res) => {
  res.status(200).send({ message: 'OK' });
});

app.use('/api', rootController);

app.listen(port, () => {
  console.log(`Server running on port ${port} ...`);
});
