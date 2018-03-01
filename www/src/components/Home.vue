<template>
  
    <div class="register container-fluid py-4">
      <topbar></topbar>
      <navbar v-on:toggleSearch="toggleSearch" v-on:showUserMovies="showUserMovies" v-on:hideSearchForm="hideSearchForm"></navbar>
      <searchform v-if="displaySearchForm" v-on:hideUserMovies="hideUserMovies"></searchform>
      <usermovies v-if="displayUserMovies"></usermovies>
      <searchresult v-if="!displayUserMovies"></searchresult>
    </div>

</template>

<script>
  import TopBar from './TopBar'
  import Navbar from './Navbar'
  import SearchForm from './SearchForm'
  import UserMovies from './UserMovies'
  import SearchResult from './SearchResult'
  export default {
    name: 'Home',
    components: {
      topbar: TopBar,
      navbar: Navbar,
      searchform: SearchForm,
      usermovies: UserMovies,
      searchresult: SearchResult
    },
    data() {
      return {
        displaySearchForm: false,
        displayUserMovies: true
      }
    },
    methods: {
      toggleSearch() {
        this.displaySearchForm = this.displaySearchForm ? false : true
      },
      showUserMovies() {
        this.displayUserMovies = true
      },
      hideUserMovies() {
        this.displayUserMovies = false
      },
      hideSearchForm() {
        this.displaySearchForm = false
      }
    },
    mounted() {
      this.$store.dispatch('getUserMovies', this.$route.params.userId)
    }
  }
</script>

<style scoped>
  
</style>