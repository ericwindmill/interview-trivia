<template>
  <div class='AddQuestion'>

    <h1>Add a Question:</h1>

    <div>
      <form class='AddQuestion--Form' v-on:submit.prevent='postQuestionToFirebase'>
        <input placeholder='Question' type='text' v-model='question'></input>
        <input placeholder='Company' type='text' v-model='company'></input>
        <input placeholder="tags --> (seperate with ',')"  type='text' v-model='tags'></input>
        <textarea type='text' v-model='answer'></textarea>
        <button type='submit'>Submit Question</button>
      </form> 
    </div>

    <h1> Preview: </h1>
    <div class='AddQuestion--Preview'>
      <div class='AddQuestion--Preview--Question'>
        <h2> {{ question }}</h2>
        <hr>
      </div>
      <div class='AddQuestion--Preview--Answer'>
        <div v-html='answer'></div>
      </div>
      <div class='AddQuestion--Preview--Company'>
        <p> <strong> Company: </strong> {{ company }}</p>
      </div>
      <div class='AddQuestion--Preview--Tags'>
        <p> <strong>Tags:</strong> </em>{{ tags }}</em></p>
      </div>
    </div>
  </div>
</template>

<script>
import { database } from '../../firebase'
const questionsRef = database.ref('questions')

export default {
  firebase: {
    questions: questionsRef
  },
  data() {
    return {
      question: '',
      company: '',
      tags: '',
      answer: ''
    }
  }, 
  methods: {
    postQuestionToFirebase() {
      let returnTags = {}
      let newTags = this.tags.split(",").forEach(tag => {
        returnTags[tag.trim()] = tag
      })
      this.$firebaseRefs.questions.push({
        tags: returnTags,
        question: this.question,
        answer: this.answer,
        company:  this.company
      })
    }
  }
}
</script>

<style scoped>
h1, h2, h3, h4, h5 {
    padding: 0;
    margin: 0;
}
  .AddQuestion {
    padding: 0 100px;
  }

  .AddQuestion--Form,
  .AddQuestion--Preview {
    margin: 0 0 100px;
    display: flex;
    flex-direction: column;
    border: 1px solid black;
    padding: 50px;
  }

  .AddQuestion--Form > input {
    height: 50px;
    margin: 10px;
    font-size: 16px;
  }

  .AddQuestion--Form > textarea {
    height: 300px;
    margin: 10px;
  }

  .AddQuestion--Form > button {
    border: 1px black solid;
    background: dodgerblue;
    padding: 15px;
    margin: 10px;
  }

  .AddQuestion--Preview--Question,
  .AddQuestion--Preview--Answer,
  .AddQuestion--Preview--Company,
  .AddQuestion--Preview--Tags {

  }

</style>
