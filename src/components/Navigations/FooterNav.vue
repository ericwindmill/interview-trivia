<template>
  <div class='Footer'>
    <div class='Footer-Left'>
      <a href='https://github.com/ericwindmill/interview-trivia'><icon class='icon' name='github'></icon></a>
      <a href='mailto:eric@ericwindmill.com'><icon class='icon' name='envelope'></icon></a>
    </div>
    <div class='Footer-Right'>
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
  background: #0c001a;
  height: calc(var(--spacing-unit) * 3);
  display: flex;
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

  .Footer-Right {
    color: white;
  }

  .Footer-Right > p > a {
    color: var(--light-blue);
  } 

  .icon {
    color: white;
  }
</style>
