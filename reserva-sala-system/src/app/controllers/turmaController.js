const { Turmas } = require('../models');

module.exports = {

  async index(req, res) {
    const listTurmas = await Turmas.findAll({
      raw: true,
    });
    console.log(listTurmas);
    return res.render('turmas/listaTurmas', {
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
    }).then(() => res.render('/turma/cadastrar', {
      mensagem: 'Cadastro concluido com sucesso!',
    }));
  },
};
