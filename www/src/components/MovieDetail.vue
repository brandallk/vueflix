<template>
  
    <div class="moviedetail container py-4">
      
      <img class="movie-img d-block mx-auto" :src="`https://image.tmdb.org/t/p/w500/${movie.poster_path}`" alt="movie poster">
      <h3 class="h5 text-center">{{movie.title}}</h3>
      <div class="text-center">
        <button class="btn btn-primary" @click="addToUserMovies(movie)">Add to My Movies</button>
      </div>

      {{userMovies}}
    </div>

</template>

<script>
  export default {
    name: 'MovieDetail',
    props: [
      'movie'
    ],
    data() {
      return {
        
      }
    },
    computed: {
      userMovies() { console.log('dispatching')
        var userId = this.$router.params.userId
        this.$store.dispatch('getUserMovies', userId)
        return this.$store.state.userMovies
      }
    },
    methods: {
      addToUserMovies(movie) {
        var modifiedUser = {
          userId: this.$router.params.userId,
          movies: []
        }
        this.$store.dispatch('addToUserMovies', movie.title)
      }
    }
  }
</script>

<style scoped>
  .movie-img {
    width: 90%;
  }
</style>