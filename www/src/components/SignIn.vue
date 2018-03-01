<template>
  
  <div class="signin container py-4">
    <form action="#" class="mx-auto p-3 border border-secondary rounded" @submit.prevent="submit">

      <h2 class="h5 text-center">Sign In</h2>

      <div class="form-group">
        <label for="signin-email">email: </label>
        <input type="text" id="signin-email" name="email" v-model="user.email" class="form-control">
      </div>
      <div class="form-group">
        <label for="signin-password">password: </label>
        <input type="password" id="signin-password" name="password" v-model="user.password" class="form-control">
      </div>

      <button type="submit" class="btn btn-primary px-4">Log In</button>

      <hr>
      <div class="text-center">
        <a href="#" class="text-muted" @click.prevent="showRegister">Register</a>
      </div>

    </form>
  </div>

</template>

<script>
  export default {
    name: 'SignIn',
    data() {
      return {
        user: {
          email: "",
          password: ""
        }
      }
    },
    methods: {
      submit() {
        this.$store.dispatch('loginUser', this.user)
      },
      showRegister() {
        this.$emit('showRegister')
      }
    }
  }
</script>

<style scoped>

</style>