const check = require('express-validator/check').check 
const sequelize = require('./../../../model/index')
const modelUser = sequelize.import('./../../../model/user')

module.exports = [
                    check('username', 'Por favor cheque o campo username')
                        .isAlphanumeric()
                        .isLength( { min: 3 } ),
                    check('login', 'Por favor cheque o campo login')
                        .isAlphanumeric()
                        .isLength( { min : 3 } ),
                    check('login', 'O texto digitado não está diponivel')
                    .custom(async function(value){
                        let user = await modelUser.findOne( { where : { login : value } } )
                        return user === null
                    }),
                    check('password', 'Por favor cheque o campo password')
                        .isAlphanumeric()
                        .isLength( { min : 3 } ),
                    check('active', 'Por favor cheque o campo active')
                        .isNumeric()
                        .isLength( { max : 1 } )
]