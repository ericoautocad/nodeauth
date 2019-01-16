const sequelize = require('./index')

module.exports = ( sequelize, DataTypes ) => { 
    return sequelize.define( 'evento', { 
        id : { 
            type: DataTypes.INTEGER,
            primaryKey : true, 
            autoIncrement : true
         },
         nome : DataTypes.STRING( 30 ),
         descricao : DataTypes.STRING( 100 ),
         data_hora : DataTypes.DATE, 
         status    : { 
             type: DataTypes.INTEGER(1),
             allowNull : false, 
             defaultValue : '1'

          }
     } )
 }