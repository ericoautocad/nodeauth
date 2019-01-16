const sequelize = require('./index')
const model_aplicacao = sequelize.import('./user')
const model_evento    = sequelize.import( './evento' )

module.exports = ( sequelize, DataTypes ) => { 
    aplicacao_evento = sequelize.define( 'aplicacao_evento', { 
        id : { 
            type: DataTypes.INTEGER,
            primaryKey : true, 
            autoIncrement : true
         },
         inicio_venda : DataTypes.DATE,
         termino_venda : DataTypes.DATE,
         total_ingresso : DataTypes.INTEGER, 
         status    : { 
             type: DataTypes.INTEGER(1),
             allowNull : false, 
             defaultValue : '1'

          }
     }, { 
         underscored : true, 
         freezeTableName : true, 
         tableName : 'aplicacao_evento'
      }  )

     aplicacao_evento.belongsTo( model_aplicacao, { foreignKey : 'id_aplicacao' }  )
     aplicacao_evento.belongsTo( model_evento, { foreignKey : 'id_evento' } )

     return aplicacao_evento

 }