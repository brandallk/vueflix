<template>

  <div class="welcome">
    <topbar></topbar>
    <signin v-on:showRegister="showRegister" v-if="showSignIn"></signin>
    <register v-on:hideRegister="hideRegister" v-else></register>
  </div>

</template>

<script>
  import TopBar from './TopBar'
  import SignIn from './SignIn'
  import Register from './Register'
  export default {
    name: 'Welcome',
    components: {
      topbar: TopBar,
      signin: SignIn,
      register: Register
    },
    data() {
      return {
        showSignIn: true
      }
    },
    methods: {
      showRegister() {
        this.showSignIn = false
      },
      hideRegister() {
        this.showSignIn = true
      }
    },
    computed: {
      // authenticatedUser() {
      //   return this.$store.state.user._id
      // }
    }
  }
</script>

<style scoped>

</style>