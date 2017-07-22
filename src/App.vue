<template>
  <div id="app">
    <top-nav></top-nav>
    <router-view></router-view>
  </div>
</template>

<script>
import topNav from './components/Navigations/TopNav'
export default {
  name: 'app',
  components: {
    topNav
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 30px;
}

li {
  list-style: none;
}
</style>
