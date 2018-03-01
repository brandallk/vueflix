var Movie = require('../models/movie')

var router = require('express').Router()

router.get('/movies', getAllMovies)
router.get('/movies/:id', getOneMovie)
router.post('/movies', createMovie)
router.delete('/movies/:id', deleteMovie)
router.put('/movies/:id', updateMovie)

function getAllMovies(req, res, next) {
  Movie.find(req.query)
    .then(movies => {
      res.send(movies)
    })
    .catch(next)
}

function getOneMovie(req, res, next) {
  Movie.findById(req.params.id)
    .then(movie => {
      return res.send(movie)
    })
    .catch(next)
}

function createMovie(req, res, next) {
  Movie.create(req.body)
    .then(movie => {
      return res.send({
        message: 'Sucessfully created a movie',
        data: movie
      })
    })
    .catch(next)
}

function deleteMovie(req, res, next) {
  Movie.findByIdAndRemove(req.params.id)
    .then(movie => {
      return res.send({
        message: 'Sucessfully deleted a movie'
      })
    })
    .catch(next)
}

function updateMovie(req, res, next) {
  Movie.findByIdAndUpdate(req.params.id, req.body, {
      new: true
    })
    .then(movie => {
      return res.send({
        message: 'Sucessfully updated movie',
        data: movie
      })
    })
    .catch(next)
}

module.exports = {
  router
}