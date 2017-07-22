<template>
  <div class='QuestionList'>
    <ul>
      <li 
        v-for='(question, index) 
        in questions' 
        :key='index'>
        <router-link  
          class='QuestionList--Question'
          :to="{name: 'QuestionDetail', params: { id: index }}"
          >{{question.question}}
        </router-link>
        <router-view
            v-if='index === $route.params.id'
            :question='question'
            :index='index'
        >
        </router-view>
      </li>
    </ul> 
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
  .QuestionList {
    width: 90%;
  }

  .QuestionList--Question {
    border: 1px solid black;
    padding: 10px;
    display: block;
  }
  
</style>
