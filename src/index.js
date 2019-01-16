module.exports = ( app, passaport ) => {
    app.use('/', require('./routes/home/')( passaport ))
    app.use('/users', require('./routes/users/')(passaport))
}