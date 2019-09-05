const express = require('express');

const routes = express.Router();

// rotas padrãoes sistema
routes.get('/', (req, res) => {
  return res.render('index', {
    layout: 'default'
  });
});

module.exports = routes;