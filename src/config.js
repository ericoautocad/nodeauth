const extractJwt  = require('passport-jwt').ExtractJwt

module.exports = { 
    secretOrKey : 'ssdfowklmnfskjhiuh89792342423dfafsdl',
    jwtFromRequest : extractJwt.fromAuthHeaderWithScheme( 'JWT' )
}