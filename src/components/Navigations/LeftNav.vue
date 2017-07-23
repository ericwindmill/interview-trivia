<template>
  <div class='LeftNav'>
    <search></search>
    <ul class='LeftNav--Categories'>
      <li>HTML<li>
      <li>RUBY</li>
      <li>RUBY</li>
      <li>RUBY</li>
      <li>RUBY</li>
      <li>RUBY</li>
    </ul>
  </div>
</template>

<script>
import Search from '../Utility/Search'
export default {
  components: {
    search: Search
  }
}
</script>

<style>


.LeftNav { 
  width: 200px;
  background: dodgerblue;
}

.LeftNav--SearchBar {
  background: white;
  border-radius: 5px;
  padding: 10px;
  color: lightgrey;
  margin: 10px;
}

.LeftNav--Categories {
  padding: 10px;
  margin: 10px;
  line-height: 30px;
}
  
</style>
