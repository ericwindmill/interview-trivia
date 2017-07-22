<template>
    <div>
      <span v-html='question.answer'></span>
      <p> Company: {{question.company}} </p>
      <p v-for='tag in question.tags'> {{tag}}</p>
    </div>
</template>

<script>
export default {
  props: {
    question() {
      return question
    },
    index() {
      return index
    }
  },
  data () {
    return {
      item: null
    }
  }
}


</script>

<style>
  
</style>
