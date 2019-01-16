const sequelize    = require('./../../model/index')
const modelUser = sequelize.import('./../../model/user')

module.exports = ( req, res ) => {
    if( req.params.id ) {
        modelUser.findById( req.params.id )
                    .then ( (user ) => {
                            user.destroy( { 
                                    where : { 
                                            id :  
                                            req.params.id
                                        }
                                    })
                                    .then( ( ) => { 
                                        return res.status( 204 ).end()
                                     } )
                                     .catch( ( erro ) => { 
                                         return res.status( 500 ).json( {
                                             status : false,
                                             erro } )
                                      } )

                     } )
                     .catch ( ( erro ) => { 
                         return res.status( 500 ).json( {
                             status : false,
                             erro } )
                      } )
    }
}  