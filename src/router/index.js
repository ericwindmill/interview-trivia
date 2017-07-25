import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home'
import QuestionDetail from '@/components/Questions/QuestionDetail'
import AddQuestion from '@/components/Questions/AddQuestion'
import SubmitQuestion from '@/components/Questions/SubmitQuestion'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/questions',
      name: 'Home',
      component: Home,
      children: [
        {
          path: ':id',
          component: QuestionDetail,
          name: 'QuestionDetail'
        }
      ]
    },
    {
      path: '/add-question',
      component: AddQuestion
    },
    {
      path: '/submit-question',
      component: SubmitQuestion,
      name: 'SubmitQuestion'
    },
    {path: '*', redirect: {name: 'Home'}}
  ]
})
