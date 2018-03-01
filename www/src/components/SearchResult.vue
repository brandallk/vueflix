<template>
  
    <div class="searchresults container py-4">

      <div class="row">
        <div class="results col-8">
          <p class="movie" v-for="movie in movies" @click="select(movie)">{{movie.title}}</p>
        </div>

        <div class="selection col-4">
          <moviedetail :movie="selectedMovie" v-if="showSelectedMovie"></moviedetail>
        </div>
      </div>

    </div>

</template>

<script>
  import MovieDetail from './MovieDetail'
  export default {
    name: 'SearchResult',
    components: {
      moviedetail: MovieDetail
    },
    data() {
      return {
        selectedMovie: {},
        showSelectedMovie: false
      }
    },
    computed: {
      movies() {
        return this.$store.state.searchResults
      }
    },
    methods: {
      select(movie) {
        this.selectedMovie = movie
        this.showSelectedMovie = true
      }
    }
  }
</script>

<style scoped>
  p.movie {
    cursor: pointer;
  }
</style>