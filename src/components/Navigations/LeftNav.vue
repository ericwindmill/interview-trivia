<template>
  <div class='LeftNav'>
    <h3>Filter Questions</h3>
    <search></search>
    <ul class='LeftNav--Categories'>
      <li @click='handleCategory' data-category='all'>
        <img class='LeftNav--LI-Image' src='http://res.cloudinary.com/ericwindmill/image/upload/v1501009857/fone-screener/one.png'>
        All
      </li>
      <li @click='handleCategory' data-category='general'>
        <img class='LeftNav--LI-Image' src='http://res.cloudinary.com/ericwindmill/image/upload/v1501009857/fone-screener/two.png'>
        General</li>
      <li @click='handleCategory' data-category='html'>
        <img class='LeftNav--LI-Image' src='http://res.cloudinary.com/ericwindmill/image/upload/v1501009857/fone-screener/three.png'>
        HTML</li>
      <li @click='handleCategory' data-category='javascript'>
        <img class='LeftNav--LI-Image' src='http://res.cloudinary.com/ericwindmill/image/upload/v1501009857/fone-screener/four.png'>
        JavaScript</li>
      <li @click='handleCategory' data-category='css'>
        <img class='LeftNav--LI-Image' src='http://res.cloudinary.com/ericwindmill/image/upload/v1501009857/fone-screener/five.png'>
        CSS</li>
      <li @click='handleCategory' data-category='ruby'>
        <img class='LeftNav--LI-Image' src='http://res.cloudinary.com/ericwindmill/image/upload/v1501009857/fone-screener/six.png'>
        Ruby</li>
      <li @click='handleCategory' data-category='rails'>
        <img class='LeftNav--LI-Image' src='http://res.cloudinary.com/ericwindmill/image/upload/v1501009857/fone-screener/seven.png'>
        Rails</li>
      <li @click='handleCategory' data-category='web'>
        <img class='LeftNav--LI-Image' src='http://res.cloudinary.com/ericwindmill/image/upload/v1501009857/fone-screener/eight.png'>
        Web</li>
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
  height: 100%;
}

.LeftNav > h3 {
  padding-bottom: 20px;
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

.LeftNav--Categories > li:hover {
  cursor: pointer;
}

.LeftNav--LI-Image {
  width: 12px;
  padding-right: 10px;
}

  
</style>
