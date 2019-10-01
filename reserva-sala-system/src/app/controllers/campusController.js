const {
  Campus,
} = require('../models');

module.exports = {

  async index(req, res) {
    const campus = await Campus.findAll({
      raw: true,
    });
    return res.render('campus', {
      listaCampus: campus,
    });
  },

  async cadastrar(req, res) {
    Campus.create({
      nome: req.body.nome,
      endereco: req.body.endereco,
    }).then(res.render('campus', {
      layout: 'default',
      mensagem: 'Campus cadastrado com sucesso',
      campus: await Campus.findAll({
        raw: true,
      }),
    })).catch((error) => {
      res.render('campus/cadastrar', {
        layout: 'default',
        erros: error.errors,
      });
    });
  },

  async editar(req, res, id) {
    const campus = await Campus.findOne({
      id,
      raw: true,
    });
    return res.render('campusEditar', {
      campus,
    });
  },

  update(req, res, id) {
    Campus.findOne({
      id,
    }).then((campus) => {
      campus.updateAttributes({
        nome: req.body.nome,
        endereco: req.body.endereco,
      });
    }).then(res.render('campus', {
      layout: 'default',
      mensagem: 'Campus cadastrado com sucesso',
      campus: Campus.findAll({
        raw: true,
      }),
    })).catch(async (error) => {
      res.render('campusEditar', {
        layout: 'default',
        erros: error.errors,
        campus: await Campus.findOne({
          id,
          raw: true,
        }),
      });
    });
  },
};
