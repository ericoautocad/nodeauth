const express                = require('express')
const router                 = express.Router()
const criterioInserir        = require('./validate/create')
const validacao              = require('./validate/')
const criterioDeletarUsuario = require('./validate/remove')
const criterioToken          = require('./validate/token')

module.exports = ( passaport ) => { 
    router.post( '/token', criterioToken, validacao,  require( './token' ) )
    router.post('/', criterioInserir, validacao, require('./create'))
    router.delete('/:id', passaport.authenticate( 'token', { session : false } ), criterioDeletarUsuario, validacao, require('./remove'))

    return router
 }



//module.exports = router