<template>
  <div>
    <question-detail
      v-for='(question, index) in questions'
      :question='question'
      :index='index'
      :key='index'
    ></question-detail>
  </div>
</template>

<script>
import { database } from '../../firebase'
import QuestionDetail from './QuestionDetail'
const questionsRef = database.ref('questions')

export default {
  firebase: {
    questions: questionsRef
  },
  components: {
    questionDetail: QuestionDetail
  }
}
</script>

<style scoped>

  
</style>
