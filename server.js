const express = require('express')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const passaport = require('passport')

const app = express()

app.use( bodyParser.urlencoded({ extended : false }) )
app.use( bodyParser.json( ) )
require( './src/routes/users/auth' )( passaport )
app.use ( passaport.initialize(  ) )
app.use( morgan( 'dev' ) )

require('./src/model/index')
require('./src/index')(app, passaport )
const PORT = process.env.PORT || 8080;

if (require.main === module){
   
    app.listen(PORT, () => {
        console.log(`Express has been started on port: ${PORT}`)
    })

}
module.exports = app
