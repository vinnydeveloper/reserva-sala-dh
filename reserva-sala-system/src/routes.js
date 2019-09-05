const express = require('express');

const routes = express.Router();

// rotas padrãoes sistema
routes.get('/', (req, res) => {
  return res.render('index', {
    layout: 'default'
  });
});

routes.get('/reserva', (req, res) => {
  return res.render('reserva', {
    layout: 'default'
  });
});

module.exports = routes;