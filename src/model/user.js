const sequelize = require('./index')
const bcrypt    = require('bcrypt-node')

module.exports = (sequelize, DataTypes) => {
    const user = sequelize.define('user', {
            id   : {
                        type: DataTypes.INTEGER,
                        primaryKey: true,
                        autoIncrement: true
            },

            username  : DataTypes.STRING,
            login : DataTypes.STRING,
            password : DataTypes.STRING,
            active : DataTypes.INTEGER
    }, {
        freezeTableName : true,
        
        
    })

    return user
}