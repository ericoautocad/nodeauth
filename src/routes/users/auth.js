const jwtStrategy = require('passport-jwt').Strategy
const sequelize = require('./../../model/index')
const modeluser = sequelize.import('./../../model/user')
const jwtConfigs = require( './../../config' )

module.exports = ( passaport ) => { 
    passaport.use( 'token', new jwtStrategy( jwtConfigs, ( payload, cb ) => { 
        modeluser
                .findById( payload.id )
                .then( ( user ) => { 
                    if( !user ) { 
                        return cb( null, false )
                     }

                     return cb( null, user )
                 } )
                 .catch( ( erro ) => { 
                     return cb( erro, false )
                  } )
     } ) )
}