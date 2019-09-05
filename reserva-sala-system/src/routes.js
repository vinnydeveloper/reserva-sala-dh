const express = require('express');

const routes = express.Router();

// rotas padrãoes sistema
routes.get('/', (req, res) => res.render('index', {
  layout: 'default',
}));

routes.get('/login', (req, res) => res.render('login', {
  layout: 'auth',
}));

routes.get('/registro', (req, res) => res.render('registro', {
  layout: 'auth',
}));


module.exports = routes;
