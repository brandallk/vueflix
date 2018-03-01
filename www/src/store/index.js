// Vuex 'store': Sets and maintains front-end application 'state'

import vue from 'vue'
import vuex from 'vuex'
import axios from 'axios'
import router from "../router"

var apiKey = '50640e57589019b650fc0ada8c01dbe0'
var movieDB = axios.create({
  baseURL:
    `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&page=1&include_adult=false&query=`,
  timeout: 2000
})

var api = axios.create({
  baseURL: '//localhost:3000/api/',
  timeout: 3000,
  withCredentials: true
})

var auth = axios.create({
  baseURL: '//localhost:3000/auth/',
  timeout: 3000,
  withCredentials: true
})

vue.use(vuex)

export default new vuex.Store({
  state: {
    user: {},
    searchResults: [],
    userMovies: []
  },

  mutations: {
    setUser(state, user) {
      state.user = user
    },
    setSearchResults(state, results) {
      state.searchResults = results
    },
    setUserMovies(state, movies) {
      state.userMovies = movies
    }
  },

  actions: {
    registerUser({commit, dispatch}, user) {
      auth.post('register', user)
          .then(res => {
            var newUser = res.data
            console.log('newUser:', newUser)
            commit('setUser', newUser)
            router.push({name: 'Home', params: {userId: newUser._id}})
          })
          .catch(err => {
            console.error(err)
          })
    },
    loginUser({commit, dispatch}, user) {
      auth.post('login', user)
          .then(res => {
            var loggedInUser = res.data
            console.log('loggedInUser:', loggedInUser)
            commit('setUser', loggedInUser)
            router.push({name: 'Home', params: {userId: loggedInUser._id}})
          })
          .catch(err => {
            console.error(err)
          })
    },
    logoutUser({commit, dispatch}) {
      auth.delete('logout')
          .then(res => {
            console.log(res)
            commit('setUser', {})
            router.push({name: 'Welcome'})
          })
          .catch(err => {
            console.error(err)
          })
    },
    authenticate({commit, dispatch}) {
        auth.get('authenticate')
            .then(res => {
              var sessionUser = res.data
              console.log('sessionUser:', sessionUser)
              commit('setUser', sessionUser)
            })
            .catch(err => {
              console.error(err)
            })
    },

    searchMovieAPI({commit, dispatch}, movietitle) {
      movieDB.get(movietitle)
          .then(res => {
            var results = res.data.results
            console.log('results:', results)
            commit('setSearchResults', results)
          })
          .catch(err => {
            console.error(err)
          })
    },

    getUserMovies({commit, dispatch}, userId) {
      api.get(`/users/${userId}/movies`)
         .then(res => {
           var movies = res.data
           console.log('users movies:', movies)
           commit('setUserMovies', movies)
         })
         .catch(err => {
           console.error(err)
         })
    },

    addToUserMovies({commit, dispatch}, movie) {
      api.post('movies', movie)
         .then(res => {
           console.log(res.data)
           dispatch('getUserMovies', movie.userId)
         })
         .catch(err => {
           console.error(err)
         })
    }

  }
})
