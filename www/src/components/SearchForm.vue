<template>
  
    <div class="searchform container-fluid py-4 bg-dark">
      <form action="#" class="mx-auto p-3 border border-light rounded bg-light" @submit.prevent="submit">

        <h2 class="h5 text-center">Search Movies</h2>
  
        <div class="form-group">
          <label for="movie-title">movie title: </label>
          <input type="text" id="movie-title" name="movie-title" v-model="movietitle" class="form-control">
        </div>
  
        <button type="submit" class="btn btn-primary px-4">Search</button>
  
      </form>
    </div>

</template>

<script>
  
  export default {
    name: 'SearchForm',
    data() {
      return {
        movietitle: ""
      }
    },
    methods: {
      submit() {
        this.$emit('hideUserMovies')
        this.$store.dispatch('searchMovieAPI', this.movietitle)
      }
    }
  }
</script>

<style scoped>

</style>