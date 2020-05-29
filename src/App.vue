<template>
  <div id="app">
    <Header class="header"/>
    <router-view/>
  </div>
</template>

<script>
  import Header from './components/Header'

  export default {
    components: {Header}
  }
</script>

<style>
  body {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  .header {
    /*position: fixed;*/
    /*top: 0;*/
    /*display: block;*/
  }
</style>