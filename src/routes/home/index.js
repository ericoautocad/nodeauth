const express = require('express')
const router  = express.Router();

module.exports = ( passaport ) => { 
    router.get('/', passaport.authenticate('token', { session : false } ), require('./home'))

    return router
 }
