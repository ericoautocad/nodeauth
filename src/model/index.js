const sequelize_instance = require('sequelize') 

const sequelize = new sequelize_instance(
    'mysql://root:password@bancomysql:3306/nodeauth',
    {
        operatorsAliases : sequelize_instance.Op,
        logging: false
   } 
)

sequelize
    .authenticate()
    .then( ( ) => console.log( "OK" ) )
    .catch( ( erro ) => console.log( erro ) )

sequelize.sync(  )

module.exports = sequelize