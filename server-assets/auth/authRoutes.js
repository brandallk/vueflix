var User = require('../models/user') // the User model (which is a Mongoose model)
var router = require('express').Router()

// Create a new user
router.post('/auth/register', (req, res) => { // Note: Never call 'next' inside an auth route! Let the request succeed or fail here; don't pass it on to another route or middleware.
console.log(req.body)
  req.body.password = User.generateHash(req.body.password) // Note: Don't bother with a 'confirmPassword' field on the backend. (That is for front-end validation.)
  User.create(req.body)
    .then(user => {
      if (!user) {
        return res.status(401).send({
          error: 'Invalid username and/or password 1'
        })
      }
      user.password = null // Don't send the (hashed) password to the front-end. Best to delete it -- but because Mongoose prevents this, null it out instead.
      // delete user.password // Deleting the password from the User instance won't work: Mongoose prevents it.
      req.session.uid = user._id // Save the userId into the session
      res.send(user) // Send back the User instance (with a nulled-out password value)
    })
    .catch(err => {
      // Do not send the 'err' object to the front end. It contains too much information: Not safe to expose it in production!
      res.status(401).send({
        error: 'Invalid username and/or password 2'
      })
    })
})

// Log in a previously-created user
router.post('/auth/login', (req, res) => {
  User.findOne({
      email: req.body.email
    })
    .then(user => {
      if (!user) {
        return res.status(401).send({
          error: 'Invalid username and/or password'
        })
      }
      if (!user.validatePassword(req.body.password)) {
        return res.status(401).send({
          error: 'Invalid username and/or password'
        })
      }
      user.password = null
      req.session.uid = user._id
      res.send(user)
    })
    .catch(err => {
      res.status(401).send({
        error: 'Invalid username and/or password'
      })
    })
})

// Determine if a user is signed in -- and if so, send the user object back to the front end
router.get('/auth/authenticate', (req, res) => {
  User.findById(req.session.uid)
    .then(user => {
      if (!user) {
        return res.status(401).send({
          error: "Please Login to Continue"
        })
      }
      user.password = null;
      return res.status(200).send(user)
    }).catch(err => {
      return res.status(500).send({
        error: err
      })
    })
})

// Log out a user (i.e. destroy the current user session)
router.delete('/auth/logout', (req, res) => {
  req.session.destroy()
  res.send("Successfully logged out")
})

module.exports = router