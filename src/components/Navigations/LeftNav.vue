<template>
  <div class='LeftNav'>
    <h3>Filter Questions</h3>
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
  padding: 15px;
  border-right: 1px solid black;
}

.LeftNav--Categories {
  padding: 10px;
  margin: 10px;
  line-height: 30px;
  display: flex;
  flex-flow: column;
  color: black;
}

.LeftNav--Categories > li {
  padding: 5px;
  border-bottom: .5px lightgrey solid;
}

  
</style>
