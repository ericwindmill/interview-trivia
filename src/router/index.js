import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home'
import QuestionDetail from '@/components/questions/QuestionDetail'
// import User from '@/components/User/User'
// import UserDetail from '@/components/User/UserDetail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
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
    // {
    //   path: '/user',
    //   name: 'User',
    //   component: User,
    //   children: [
    //     {
    //       path: ':id',
    //       name: UserDetail,
    //       component: UserDetail
    //     }
    //   ]
    // },
    {path: '*', redirect: {name: 'Home'}}
  ]
})
