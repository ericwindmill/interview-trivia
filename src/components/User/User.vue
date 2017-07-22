<template>
  <div>
    <button @click='navigateToHome'>Go Home</button>
    <router-link tag='button' to='user/1'> Show User 1</router-link>
    <router-link tag='button' to='user/2'> Show User 2</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  methods: {
    navigateToHome() {
      this.$router.push('/')
    }
  }
}
</script>

<style>
</style>
