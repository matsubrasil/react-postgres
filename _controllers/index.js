const express = require('express');
const router = express.Router();

const authController = require('./auth.controller');

// Teste
const test = (req, res) => {
  res.status(200).send({ message: 'FROM Controller' });
};

router.get('/', test);

// Routes
router.use('/auth', authController);

module.exports = router;
