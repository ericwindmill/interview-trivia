<template>
    <div>
      <h1> {{question.question}} </h1>
      <span v-html='question.answer'></span>
      <p> Company: {{question.company}} </p>
      <p v-for='tag in question.tags'> {{tag}}</p>
    </div>
</template>

<script>
// import { database } from '../firebase'
// const questionsRef = database.ref('questions')
export default {
  props: {
    question() {
      return question
    }
  }
  // firebase: {
  //   questions: questionsRef
  // }
}
</script>

<style>
  
</style>
