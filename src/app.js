const express = require('express');

const app = express();

app.use(express.json());

app.get('/teste', (req, res) => {
  res
    .status(200)
    .send({ mensagem: 'Api online!' });
});

module.exports = app;
