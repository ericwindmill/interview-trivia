<template>
    <div>
      <span v-html='question.answer'></span>
      <p> Company: {{question.company}} </p>
      <h4>Tags: </h4>
      <div class='QuestionDetail--Tag' :key='tag' v-for='tag in question.tags'> 
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
