const express = require('express');

const routes = express.Router();
const UsuarioController = require('./app/controllers/usuarioController');
const LoginController = require('./app/controllers/loginController');
const SalaController = require('./app/controllers/salaController');
const CampusController = require('./app/controllers/campusController');
const Auth = require('./app/middlewares/auth');

// rotas padrãoes sistema

routes.get('/', Auth.verificarLogin, (req, res) => res.render('index'));

routes.get('/login', LoginController.index);
routes.post('/login', LoginController.logar);
routes.get('/logout', LoginController.deslogar);


routes.get('/usuario/cadastrar', UsuarioController.index);

routes.post('/usuario/cadastrar', UsuarioController.cadastrar);


routes.get('/reserva', Auth.verificarLogin, (req, res) => {
  const {
    session,
  } = req;

  return res.render('reserva', {
    logado: true,
    nome: session.usuario.nome,
  });
});

routes.get('/calendario', Auth.verificarLogin, (req, res) => {
  const {
    session,
  } = req;

  return res.render('calendario', {
    logado: true,
    nome: session.usuario.nome,
  });
});

routes.get('/campus', CampusController.index);
routes.get('/campus/editar/:id', CampusController.show);
routes.post('/campus/editar/:id', CampusController.update);
routes.post('/campus/cadastrar', CampusController.create);

routes.get('/salas', SalaController.index);
routes.get('/salas/editar/:id', SalaController.show);
routes.post('/salas/editar/:id', SalaController.update);
routes.post('/salas/cadastrar', SalaController.create);

module.exports = routes;