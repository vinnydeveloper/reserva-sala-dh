const express = require('express');
const routes = express.Router();
const UsuarioController = require('./app/controllers/usuarioController');
const LoginController = require('./app/controllers/loginController');
const TurmaController = require('./app/controllers/turmaController');
const SalaController = require('./app/controllers/salaController');
const CampusController = require('./app/controllers/campusController');
const Auth = require('./app/middlewares/auth');
const upload = require('./config/uploads');


// rotas padrãoes sistema

routes.get('/', Auth.verificarLogin, (req, res) => res.render('index'));
// logins
routes.get('/login', LoginController.index);
routes.post('/login', LoginController.logar);
routes.get('/logout', LoginController.deslogar);
// usuarios
routes.get('/usuario/cadastrar',UsuarioController.index);
routes.get('/usuarios/', UsuarioController.admin);
routes.get('/usuarios/editar/:id', UsuarioController.show);
routes.post('/usuarios/editar/:id', UsuarioController.update);
routes.get('/usuarios/excluir/:id', UsuarioController.excluir);

routes.post('/usuario/cadastrar', upload.single('file'), UsuarioController.create);

// turmas
routes.get('/turmas', TurmaController.index);
routes.get('/turmas/cadastrar', TurmaController.exibirCadastro);
routes.post('/turmas/cadastrar', TurmaController.cadastrar);
routes.get('/turmas/excluir/:idTurma', TurmaController.excluir);


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

routes.get('/campus', Auth.verificarLogin, CampusController.index);
routes.get('/campus/editar/:id', Auth.verificarLogin, CampusController.show);
routes.post('/campus/editar/:id', Auth.verificarLogin, CampusController.update);
routes.post('/campus/cadastrar', Auth.verificarLogin, CampusController.create);
routes.get('/campus/excluir/:id', Auth.verificarLogin, CampusController.excluir);

routes.get('/salas',  SalaController.index);
routes.get('/salas/editar/:id', Auth.verificarLogin, SalaController.show);
routes.post('/salas/editar/:id', Auth.verificarLogin, SalaController.update);
routes.post('/salas/cadastrar', Auth.verificarLogin, SalaController.create);
routes.get('/salas/excluir/:id', Auth.verificarLogin, SalaController.excluir);

module.exports = routes;