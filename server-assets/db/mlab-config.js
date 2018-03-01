// Details for database hosted on mLab (Should be stored in environment variable before production):
var user = 'test' // username for the db's user
var pswd = 'test' // password of that db user
var connectionStr = `mongodb://${user}:${pswd}@ds012538.mlab.com:12538/vueflix` // url for the hosted mongo database

// Mongoose connection setup. (Mongoose = driver/ORM for mongo db)
var mongoose = require('mongoose')
var connection = mongoose.connection
mongoose.connect(connectionStr)

// If the db connection fires an error event, send a message to the console
connection.on('error', err => {
  console.log('mLab error', err)
})

// When the db connection is first initiated, send a message to the console
connection.on('open', () => {
  console.log('mLab is up!')
})