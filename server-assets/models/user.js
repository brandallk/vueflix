var mongoose = require('mongoose')
var Schema = mongoose.Schema
var schemaName = "User"

// Bcrypt library for hashing passwords
var bcrypt = require('bcryptjs')
const SALT_FACTOR = 13 // Sets the number of times the hashing algorithm runs.

var schema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true,
    // (Note: The following minlength will apply to the HASHED version of a password, as passwords are stored
    // here AFTER hashing. Use validation elsewhere to force users to create their unhashed passwords > a given length.)
    minlength: 8
  }
})

// Static method: Can be used via the model itself to hash a password
schema.statics.generateHash = function(password) {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(SALT_FACTOR)) // (Synchronous hashing function used here. Bcrypt also has an async option.)
}

// Non-static method: Can be used on a model instance to compare a given unhashed password
// with a user's stored hashed password
schema.methods.validatePassword = function(password) {
  return bcrypt.compareSync(password, this.password) // (Synchronous compare function used here. Bcrypt also has an async option.)
}

module.exports = mongoose.model(schemaName, schema)
