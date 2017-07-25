<template>
  <div id="app">
    <top-nav></top-nav>
    <transition name='slide'>
      <router-view></router-view>
    </transition>
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
}

li {
  list-style: none;
}

</style>
