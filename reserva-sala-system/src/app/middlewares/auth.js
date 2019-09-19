module.exports = {
  verificarLogin(req, res, next) {
    const { session } = req;
    if (!session.usuario) {
      return res.render('login', {
        mensagem: 'Você precisa está logado para ter acesso ao role!',
      });
    }
    res.locals.session = req.session;
    return next();
  },
};
