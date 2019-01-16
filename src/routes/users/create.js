const sequelize = require('./../../model/index')
const modelUser = sequelize.import('./../../model/user')
const bcrypt    = require('bcrypt-node')

module.exports = (req, res) => {
    
    req.body.password = bcrypt.hashSync(req.body.password, 
    bcrypt.genSaltSync(10))
    
    modelUser.create(req.body)
             .then( (user) => { 
                 return res.json( { 
                     status : true,
                     user } )
             } )
             .catch( ( erro ) => {
                 return res.json( {
                     status : false,
                     erro
                 })
             } )
    
             

}