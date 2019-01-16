const check = require('express-validator/check').check

module.exports = [
                    check('id', 'Por favor cheque o id nome')
                        .isAlphanumeric()
                        .isLength( { min: 1 } )
]