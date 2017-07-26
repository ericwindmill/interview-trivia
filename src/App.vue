<template>
  <div id="app">
    <top-nav></top-nav>
    <transition name='slide'>
      <router-view></router-view>
    </transition>
    <foot-nav></foot-nav>
  </div>
</template>

<script>
import topNav from './components/Navigations/TopNav'
import footNav from './components/Navigations/FooterNav'
export default {
  name: 'app',
  components: {
    topNav,
    footNav
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
