<template>
  <div class='Footer'>
    <div class='Footer-Left'>
      <a href='https://github.com/ericwindmill/interview-trivia'><icon name='github'></icon></a>
      <a href='mailto:eric@ericwindmill.com'><icon name='envelope'></icon></a>
    </div>
    <div class='Footer-Left'>
      <p> 2017 | <a href='http://ericwindmill.com'>Eric Windmill</a> </p>

    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
  .Footer {
  padding: 0 var(--spacing-unit);
  margin: 0 0 0;
  background: var(--light-grey);
  height: calc(var(--spacing-unit) * 6);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  }

  .Footer-Left {
    margin: 0 50px;
    display: flex;
    flex-flow: row;
  }

  .Footer-Left > a {
    margin: 10px;
  }
</style>
