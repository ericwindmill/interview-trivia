<template>
  <div>
  <h1>FoneScreener</h1>
  <ul class='TopNav--Links'>
    <router-link to='/' tag='li'><a>Home</a></router-link>
    <router-link to='/user' tag='li'><a>User</a></router-link>
  </ul>
  </div>
</template>

<script>
export default {

}
</script>

<style>
  .router-link-exact-active {
    background: dodgerblue;
  }

  .TopNav--Links > li {
    border: 1px red solid;
    padding: 10px;
    display: inline;
    color: black;
  }

</style>
