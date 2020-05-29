<template>
  <div class="login-page">
    <LoginForm/>
  </div>
</template>

<script>
  import LoginForm from '../components/LoginForm'

  export default {
    name: 'LoginPage',
    components: {LoginForm}
  }
</script>

<style scoped>
  .login-page {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 50vh;
  }
</style>
