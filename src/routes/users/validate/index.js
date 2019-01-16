const validationResult = require('express-validator/check').validationResult

module.exports = ( req, res, next ) => {
    const erros = validationResult(req)
    
    if( !erros.isEmpty() ) {
        return res.status( 400 ).json({
            erros : erros.mapped()
        })
      }

      return next()

    }
    