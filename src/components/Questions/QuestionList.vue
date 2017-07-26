<template>
  <div class='QuestionList'>
    <h2> {{searchTerm}} questions </h2>
    <ul>
      <li 
        v-for='(question, index) 
        in questions' 
        :key='index'
        >
        <div class='QuestionList--Question'
          @click='changeShow(index)'
        >
          <span> {{question.question}} </span>
          <span> 
            <icon v-show='index !== show' class='open-icon' name="chevron-down"></icon> 
            <icon v-show='index === show' class='close-icon' name="times"></icon> 
          </span>
        </div>
        <question-detail
            v-show='show === index'
            :question='question'
            :index='index'
        ></question-detail>
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
      searchTerm: 'all',
      companyList: {},
      answer: Object,
      selectedId: Number,
      show: false
    }
  },
  methods: {
    changeShow (index) {
      if (this.show === index) {
        this.show = false
      } else { 
        this.show = index
      }

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
        console.log('here')
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
    margin: 10px 30px;
    width: 75%;
    height: 85vh;
    overflow-y: scroll; 
  }

.QuestionList > ul {
  padding: 0;
}

.QuestionList--Question {
  display: flex;
  justify-content: space-between;
  border-bottom: 1px lightgrey solid;
  padding: 20px;
}

.QuestionList--Question:hover {
  cursor: pointer;
}

.open-icon {
  width: auto;
  height: 1em;
  color: var(--blue-purple)
}

.close-icon {
  color: var(--pink-accent);
  height: 1em;
}

  
</style>
