<template>
  
    <div class="usermovies container py-4">
      
      <div class="row">

        <div class="movie col-4" v-for="movie in movies">
          <moviedetail :movie="movie" :displayAddButton="false"></moviedetail>
        </div>

      </div>

    </div>

</template>

<script>
  import MovieDetail from './MovieDetail'
  export default {
    name: 'UserMovies',
    components: {
      moviedetail: MovieDetail
    },
    data() {
      return {
        
      }
    },
    computed: {
      movies() {
        return this.$store.state.userMovies
      }
    },
    methods: {
      
    }
  }
</script>

<style scoped>

</style>