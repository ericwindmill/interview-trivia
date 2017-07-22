<template>
  <div>
    <h1> Current User: </h1>
    <p> Loaded ID: {{id}}</p> 
    <button @click='navigateToHome'>Go Home</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      id: this.$route.params.id
    }
  },
  methods: {
    navigateToHome() {
      this.$router.push('/')
    }
  }
}
</script>

<style>
</style>
