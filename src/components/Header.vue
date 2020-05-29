<template>
  <el-menu
      :default-active="activeIndex"
      class="header"
      mode="horizontal"
      background-color="#1976d2"
      text-color="#fff"
      active-text-color="#ffb74d"
  >
    <el-menu-item index="1">
      <router-link to="/login">Login</router-link>
    </el-menu-item>
    <el-menu-item index="2">
      <router-link to="/">Users list</router-link>
    </el-menu-item>
    <el-menu-item index="3">
      <router-link to="/user">User</router-link>
    </el-menu-item>
  </el-menu>
</template>

<script>
  export default {
    name: 'Header',
    data() {
      return {
        activeIndex: '1'
      }
    }
  }
</script>

<style>
  .header {
    /*background: aqua;*/
  }
</style>
