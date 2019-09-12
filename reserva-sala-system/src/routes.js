const express = require('express');

const routes = express.Router();
const UsuarioController = require('./app/controllers/usuarioController');

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

routes.get('/criarUsuario', UsuarioController.criar);

module.exports = routes;
routes.get('/reserva', (req, res) => res.render('reserva', {
  layout: 'default',
}));

module.exports = routes;
