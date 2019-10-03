const { Turmas } = require('../models');

module.exports = {

  async index(req, res) {
    const listTurmas = await Turmas.findAll({
      raw: true,
    });
    return res.render('turmas/turmas', {
      listTurmas,
    });
  },
  exibirCadastro(req, res) {
    return res.render('turmas/cadastrarTurma');
  },
  cadastrar(req, res) {
    const {
      codigoTurma, curso, periodo, dataInicio, dataFim, diasCurso, observacao,
    } = req.body;
    const dias = JSON.stringify(diasCurso);
    Turmas.create({
      codigoTurma,
      curso,
      periodo,
      dataInicio,
      dataFim,
      diasCurso: dias,
      observacao,
    }).then(() => res.redirect('/turmas'));
  },
  excluir(req, res){
    Turmas.destroy({
      where:{
        id:req.params.idTurma
      }
    }).then(()=>{
      res.redirect('/turmas')
    })
  }
};
