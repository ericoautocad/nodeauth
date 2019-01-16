const sequelize = require('./../../model/index')
const modelUser = sequelize.import('./../../model/user')

module.exports = (req, res) => {
    modelUser
               .findAll( { attributes: [ 'id', 'username', 'login' ] } )
               .then( (users) => { 
                   return res.status( 200 ).json( { 
                       status: true,
                       users
                    } )
                } )
                .catch( ( erro ) => { 
                    return res.status( 500 ).json( {
                        status :  false,
                        erro
                    } )
                 } )
}