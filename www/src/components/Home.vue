<template>
  
    <div class="register container-fluid py-4">
      <topbar></topbar>
      <navbar v-on:toggleSearch="toggleSearch"></navbar>
      <searchform v-if="showSearchForm"></searchform>
      <usermovies></usermovies>
      <searchresult></searchresult>
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
        showSearchForm: true
      }
    },
    methods: {
      toggleSearch() {
        this.showSearchForm = this.showSearchForm ? false : true
      }
    }
  }
</script>

<style scoped>
  
</style>