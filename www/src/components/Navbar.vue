<template>
  
    <div class="navbar container-fluid bg-dark">

      <div class="row w-100 text-light">
        <div class="homelink col-4 text-center py-4">
          <router-link :to="{name: 'Home'}">Home</router-link>
        </div>

        <div class="searchtoggle col-4 text-center py-4" @click="toggleSearch">
          Search
        </div>

        <div class="logout col-4 text-center py-4">
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
      }
    }
  }
</script>

<style scoped>
  .searchtoggle:hover {
    cursor: pointer;
  }
</style>