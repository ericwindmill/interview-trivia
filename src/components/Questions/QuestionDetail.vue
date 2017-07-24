<template>
    <div>
      <span v-html='question.answer'></span>
      <h4> Companies: 
        <div class='QuestionDetail--Companies' v-for='(company, i) in question.company' :key='i'>
          {{company}} &nbsp; 
        </div>  
      </h4>
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

<style>
  .QuestionDetail--Tag {
    display: inline-block;
  }
</style>
