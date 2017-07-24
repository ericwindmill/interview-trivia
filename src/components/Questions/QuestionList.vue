<template>
  <div class='QuestionList'>
    <ul>
      <li 
        v-for='(question, index) 
        in questions' 
        :key='index'
        >
        <router-link  
          class='QuestionList--Question'
          :to="{name: 'QuestionDetail', params: { id: index }}"
          tag='li'
          >
            <a>{{question.question}}</a>
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
import { eventBus } from '../../main'
import { database } from '../../firebase'
import QuestionDetail from './QuestionDetail'
let questionsRef = database.ref('questions')
let companiesRef = database.ref('companies')

export default {
  firebase: {
    questions: questionsRef,
    companies: companiesRef
  },
  data() {
    return {
      searchTerm: '',
      companyList: {}
    }
  },
  components: {
    questionDetail: QuestionDetail
  },
  created() {
    eventBus.$on('userSearching', (term => {
      this.searchTerm = term
    }))
    eventBus.$on('chooseCategory', (term => {
      this.searchTerm = term
    }))
  },
  watch: {
    'searchTerm' : async function (val, oldVal) {
      let searchTerm
      //create current company list.
      this.$firebaseRefs.companies.once('value', company => {
          this.companyList = company.val()
      })
      //handle search for all
      if (val === 'all' || val === '') {
        await database.ref('questions')
          .once('value', questions => {
            this.questions = questions.val()
          })
      //handle search for companies
    } else if (this.companyList[val]) {
        await database.ref('questions')
          .orderByChild(`companies/${val}`)
          .equalTo(val)
          .once('value', questions => {
            this.questions = questions.val()
          })
      //handle search for tags
    } else {
        await database.ref('questions')
          .orderByChild(`tags/${val}`)
          .equalTo(val)
          .once('value', questions => {
            this.questions = questions.val()
          })
      }
    }
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
