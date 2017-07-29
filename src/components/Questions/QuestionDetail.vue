<template>
    <div class='QuestionDetail'>
      <div class='QuestionDetail--Answer' v-html='question.answer'></div>
      <h4> Companies: </h4>
      <div class='QuestionDetail--Companies' v-for='(company, i) in question.companies' :key='i'>
        {{company}} &nbsp; 
      </div>
      <br />
      <h4>Tags: </h4>
      <div class='QuestionDetail--Tag' v-for='(tag, i) in question.tags' :key='i'> 
          {{tag}} &nbsp;
      </div>
    </div>
</template>

<script>
export default {
  props: {
    question: {
      type: Object
    },
    index: {
      type: Number
    },
  }
}


</script>

<style scoped>

  .QuestionDetail {
    background: white;
    padding: 50px;
    border: 1px solid lightgrey;
    border-radius: 0 0 5px 5px;
  }

  .QuestionDetail--Answer {
    padding-bottom: 50px;
    border-bottom: 1px solid black;
  }

  .QuestionDetail--Tag, .QuestionDetail--Companies {
    display: inline-block;
  }

  h4 {
    display: inline-block;
    margin: 5px;
  }
</style>
