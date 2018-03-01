var User = require('../models/user')
var Movie = require('../models/movie')

var router = require('express').Router()

// Note: Never create a route like '/api/users' (except perhaps for a priveledged-role admin user).

router.get('/users/:id/movies', getMoviesByUser)

function getMoviesByUser(req, res, next) {
  Movie.find({
      userId: req.params.id
    })
    .then(movies => {
      return res.send(movies)
    })
    .catch(next)
}

// TEMPORARY!!! Get all Users
router.get('/users', getAllUsers)
function getAllUsers(req, res, next) {
  User.find(req.query)
    .then(users => {
      res.send(users)
    })
    .catch(next)
}

module.exports = {
  router
}