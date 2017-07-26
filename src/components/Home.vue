<template>
  <div class='Home'>
    <div class='Home--Main'>
      <left-nav></left-nav>
      <question-list></question-list>
    </div>
  </div>
</template>

<script>
import QuestionList from './Questions/QuestionList'
import LeftNav from './Navigations/LeftNav'
import TopNav from './Navigations/TopNav'


export default {
  components: {
    questionList: QuestionList,
    leftNav: LeftNav,
    topNav: TopNav
  }
}
</script>

<style>
  .Home--Main {
    display: flex;
    min-height: 85vh;
  }
</style>
