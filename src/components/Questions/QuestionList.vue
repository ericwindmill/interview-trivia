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
        <transition name="fade" mode="in-out">
          <question-detail
              class='QuestionList--Detail'
              v-transition
              v-show='show === index'
              :question='question'
              :index='index'
          ></question-detail>
        </transition>
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
      this.searchTerm = term.trim()
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

.QuestionList--Detail {
    transition: all .3s ease;
    height: 100%;
}
.QuestionList--Detail.v-enter,
.QuestionList--Detail.v-leave {
    height: 0;
    opacity: 0;
}

.fade-enter-active, .fade-leave-active {
  transition: all .3s;
}
.fade-enter, .fade-leave-to  {
    transform: translateY(-10px);
  height: 0;
  opacity: 0;
}

  
</style>
