const check = require('express-validator/check').check

module.exports = [
                    check('login', 'Por favor cheque o campo login')
                        .isAlphanumeric()
                        .isLength( { min : 3 } ),
                    check('password', 'Por favor cheque o campo password')
                        .isAlphanumeric()
                        .isLength( { min : 3 } ),
]