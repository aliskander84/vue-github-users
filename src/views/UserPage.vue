<template>
  <div class="user-page">
    <el-card class="card">
      <img :src="avatar" alt="">
      <h3 class="login">{{login}}</h3>
    </el-card>
  </div>
</template>

<script>
  import {mapGetters} from 'vuex'

  export default {
    name: 'UserList',
    props: {
      id: String
    },
    computed: {
      ...mapGetters(['users']),
      avatar() {
        return this.users[this.id].avatar_url
      },
      login() {
        return this.users[this.id].login
      }
    }
  }
</script>

<style scoped>
  .user-page {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 16px;
  }

  .card {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .login {
    text-align: center;
  }
</style>