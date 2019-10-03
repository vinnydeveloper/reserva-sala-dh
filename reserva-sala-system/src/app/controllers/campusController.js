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

  async create(req, res) {
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

  async show(req, res) {
    const {
      id
    } = req.params;
    Campus.findOne({
        where: {
          id
        }
      })
      .then((campus) => {
        res.render('campusEditar', {
          campus,
          layout: 'default',
        })
      }).catch((error) => {
        res.render('campus', {
          layout: 'default',
          erros: error.errors,
        });
      });
  },

  update(req, res) {
    Campus.update({
      nome: req.body.nome,
      endereco: req.body.endereco,
    }, {
      returning: true,
      where: {
        id: req.body.campusId
      },
    }).then(async () => res.render('campus', {
      layout: 'default',
      mensagem: 'Campus atualizado com sucesso',
      listaCampus: await Campus.findAll({
        raw: true,
      }),
    })).catch(async (error) => res.render('campusEditar', {
      layout: 'default',
      erros: error.errors,
      listaCampus: await Campus.findOne({
        id: req.body.campusId,
        raw: true,
      })
    }));
  },
};