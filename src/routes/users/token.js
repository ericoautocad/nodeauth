const sequelize = require('./../../model/index')
const modelUser = sequelize.import('./../../model/user')
const jwt       = require('jwt-simple')
const bcrypt    = require('bcrypt-node')
const jwtConfigs = require( './../../config' )

module.exports  = ( req, res ) => { 
    let { login } = req.body
    let password     = req.body.password

    modelUser
            .findOne( { where : { login } } )
            .then( ( user ) => { 
                if( !user ) {
                    return res.status( 404 ).json( { 
                            status : false,
                            token : '' 
                     } )
                }

                bcrypt.compare( password, user.password, ( erro, resultado ) => { 
                    if( !resultado || erro ) {
                        return res.status( 400 ).json( { 
                            status : false,
                            token : ''
                         } )
                    }
                    
                    let token = jwt.encode( { id : user.id }, jwtConfigs.secretOrKey )

                    return res.status( 200 ).json( { 
                        status : true,
                        token : token
                     } )

                 } )

             } )
            .catch( ( erro ) => { 
                return res.status( 500 ).json( { 
                    status : false,
                    erro
                 } )
             } )
 }