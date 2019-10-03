const express = require('express');

const routes = express.Router();
const UsuarioController = require('./app/controllers/usuarioController');
const LoginController = require('./app/controllers/loginController');
const TurmaController = require('./app/controllers/turmaController');
const Auth = require('./app/middlewares/auth');

// rotas padrãoes sistema

routes.get('/', Auth.verificarLogin, (req, res) => res.render('index'));
// logins
routes.get('/login', LoginController.index);
routes.post('/login', LoginController.logar);
routes.get('/logout', LoginController.deslogar);
// usuarios
routes.get('/usuario/cadastrar', UsuarioController.index);
routes.post('/usuario/cadastrar', UsuarioController.cadastrar);

// turmas
routes.get('/turma', TurmaController.index);
routes.get('/turma/cadastrar', TurmaController.exibirCadastro);
routes.post('/turma/cadastrar', TurmaController.cadastrar);


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


module.exports = routes;
