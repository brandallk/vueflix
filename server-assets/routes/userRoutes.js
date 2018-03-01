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

// TEMPORARY FOR TESTING!!! Get all Users
// router.get('/users', getAllUsers)
// function getAllUsers(req, res, next) {
//   User.find(req.query)
//     .then(users => {
//       res.send(users)
//     })
//     .catch(next)
// }

// TEMPORARY FOR TESTING!!! Delete a User
// router.delete('/users/:id', deleteUser)
// function deleteUser(req, res, next) {
//   User.findByIdAndRemove(req.params.id)
//     .then(user => {
//       return res.send({
//         message: 'Sucessfully deleted a user'
//       })
//     })
//     .catch(next)
//   Movie.deleteMany({
//       userId: req.params.id
//     })
//     .then(() => {
//       console.log('Deleted user movies')
//     })
//     .catch(next)
// }

module.exports = {
  router
}