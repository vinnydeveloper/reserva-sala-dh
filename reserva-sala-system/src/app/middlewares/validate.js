const { checkSchema } = require('express-validator');


const teste = checkSchema({

  nome:{
    isLength:{
      errorMessage:"Nome menor que 3 caracteres ",
      options:{min:3}
    },
  },
  senha: {
    isLength: {
      errorMessage: 'Senha está incorreta',
      // Multiple options would be expressed as an array
      options: { min: 7 }
    }
  },

})


module.exports = teste
