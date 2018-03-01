<template>
  
    <div class="navbar container-fluid bg-dark">

      <div class="row w-100 text-light">
        <div class="homelink navlink col-4 text-center py-4" @click="showUserMovies">
          Home
        </div>

        <div class="searchtoggle navlink col-4 text-center py-4" @click="toggleSearch">
          Search
        </div>

        <div class="logout navlink col-4 text-center py-4">
          Logout
        </div>
      </div>

    </div>

</template>

<script>
  
  export default {
    name: 'Navbar',
    data() {
      return {
        
      }
    },
    methods: {
      toggleSearch() {
        this.$emit('toggleSearch')
      },
      showUserMovies() {
        this.$emit('showUserMovies')
        this.$emit('hideSearchForm')
      }
    }
  }
</script>

<style scoped>
  .navlink:hover {
    cursor: pointer;
  }
</style>