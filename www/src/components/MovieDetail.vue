<template>
  
    <div class="moviedetail py-4">
      
      <img class="movie-img d-block mx-auto" :src="`https://image.tmdb.org/t/p/w500/${movie.poster_path}`" alt="movie poster">
      <h3 class="h5 text-center">{{movie.title}}</h3>
      <div class="text-center">
        <button class="btn btn-primary" v-if="displayAddButton" @click="addToUserMovies(movie)">Add to My Movies</button>
      </div>
    </div>

</template>

<script>
  export default {
    name: 'MovieDetail',
    props: [
      'movie',
      'displayAddButton'
    ],
    data() {
      return {
        
      }
    },
    methods: {
      addToUserMovies(movie) {
        var newMovie = {
          title: movie.title,
          desc: movie.overview,
          poster_path: movie.poster_path,
          userId: this.$route.params.userId
        }
        this.$store.dispatch('addToUserMovies', newMovie)
      }
    }
  }
</script>

<style scoped>
  .movie-img {
    width: 90%;
  }
</style>