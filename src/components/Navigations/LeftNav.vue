<template>
  <div class='LeftNav'>
    <search></search>
    <ul class='LeftNav--Categories'>
      <li @click='handleCategory' data-category='all'>All</li>
      <li @click='handleCategory' data-category='web'>Web</li>
      <li @click='handleCategory' data-category='html'>HTML</li>
      <li @click='handleCategory' data-category='javascript'>JavaScript</li>
      <li @click='handleCategory' data-category='css'>CSS</li>
      <li @click='handleCategory' data-category='ruby'>Ruby</li>
      <li @click='handleCategory' data-category='css'>CSS</li>
      <li @click='handleCategory' data-category='css'>CSS</li>
    </ul>
  </div>
</template>

<script>
import {eventBus} from '../../main'
import Search from '../Utility/Search'

export default {
  data() {
    return {
      category: ''
    }
  },
  methods: {
    handleCategory(e) {
      this.category = e.target.dataset.category
      console.log(this.category)
      eventBus.$emit('chooseCategory', this.category)
    }
  },
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
  display: flex;
  flex-flow: column;
}

  
</style>
