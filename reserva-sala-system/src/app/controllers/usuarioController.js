const bcrypt = require('bcrypt');
const {
  Usuarios
} = require('../models');
const {validationResult } = require('express-validator');
module.exports = {

  index(req, res) {
    return res.render('usuarios/usuarioCadastro');
  },
  async create(req, res) {

    const eerrors = await validationResult(req).array();

      console.log(eerrors)

    const listaUsuarios = await Usuarios.findAll({
      raw: true,
    });
    const salt = bcrypt.genSaltSync(10);
    const passWordHash = bcrypt.hashSync(req.body.senha, salt);

    Usuarios.create({
      nome: req.body.nome,
      email: req.body.email,
      senha: passWordHash,
    }).then(() => {
      if (req.body.page) {
        res.render('usuarios/usuarios', {
          layout: 'default',
          mensagem: 'Usuario cadastrado com sucesso',
          listaUsuarios
        })
      } else {
        res.render('login', {
          layout: 'default',
          mensagem: 'Usuario cadastrado com sucesso',
        })
      }
    }).catch((error) => {
      if (req.body.page) {
        res.render('usuarios/usuarios', {
          layout: 'default',
          erros: eerrors,
          listaUsuarios
        })
      } else {
        res.render('usuarios/usuarioCadastro', {
          layout: 'default',
          erros: eerrors,
        })
      }
    });
  },


  async admin(req, res) {
    const listaUsuarios = await Usuarios.findAll({
      raw: true,
    });
    return res.render('usuarios/usuarios', {
      listaUsuarios,
    });
  },

  async show(req, res) {

    const {
      id
    } = req.params;
    const listUsuarios = await Usuarios.findAll({
      raw: true,
    });

    Usuarios.findOne({
        where: {
          id
        }
      })
      .then((usuario) => {
        res.render('usuarios/usuarioEditar', {
          usuario,
          layout: 'default',
          listUsuarios: listUsuarios,
        })
      }).catch((error) => {
        res.render('usuarios/usuarios', {
          layout: 'default',
          erros: error.errors,
        });
      });
  },

  async update(req, res) {
    const salt = bcrypt.genSaltSync(10);
    const passWordHash = bcrypt.hashSync(req.body.senha, salt);

    const listaUsuarios = Usuarios.findAll({
      raw: true,
    });
    Usuarios.update({
      nome: req.body.nome,
      email: req.body.email,
      senha: passWordHash,
    }, {
      returning: true,
      where: {
        id: req.body.usuarioId
      },
    }).then(async () => res.render('usuarios/usuarios', {
      layout: 'default',
      mensagem: 'Usuario atualizado com sucesso',
      listaUsuarios: await Usuarios.findAll({
        raw: true,
      }),
    })).catch(async (error) => res.render('usuarios/usuarioEditar', {
      layout: 'default',
      erros: error.errors,
      listaUsuarios: listaUsuarios
    }));
  },
};
