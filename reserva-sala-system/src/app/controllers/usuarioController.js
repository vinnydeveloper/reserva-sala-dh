
const { Usuarios } = require('../models');

module.exports = {

  criar() {
    console.log(Usuarios);
    Usuarios.create({ nome: 'Vinicius', email: 'Vinicius@rocketseat.com.br', senha: '123456' });
  },

};
