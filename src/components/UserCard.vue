<template>
  <el-card :body-style="{padding: '16px'}" class="card-wrap">
    <div class="card">
      <div>
        <img :src="img" alt="" class="avatar">
      </div>
      <router-link
          :to="`/user/${id}`"
      >
        <div class="login">{{login}}</div>
      </router-link>
    </div>
  </el-card>
</template>

<script>
  export default {
    name: 'UserCard',
    props: {
      login: String,
      img: String,
      id: Number
    }
  }
</script>

<style scoped>
  .card-wrap {
    max-width: 480px;
    /*min-width: 300px;*/
    display: inline-block;
  }

  .card {
    display: flex;
    align-items: center;
    /*flex-direction: row;*/
  }

  .avatar {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    /*display: block;*/
  }

  .login {
    margin-left: 16px;
  }
</style>