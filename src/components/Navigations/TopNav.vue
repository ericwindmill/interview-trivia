<template>
  <header class='TopNav'>
    <h1>Tech Trivia</h1>
    <h3>Submit a question</h3>
  </header>
</template>

<script>
export default {

}
</script>

<style>
.TopNav {
  padding: 0 var(--spacing-unit);
  margin: 0 0 0;
  background: var(--brand-color);
  height: calc(var(--spacing-unit) * 2.5);
  box-shadow: 0px 2px 2px var(--shadow-color);
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.TopNav > h1 {
  color: white;
}

.TopNav > h3 {
  color: rgba(255, 255, 255, 0.7);
  text-decoration: underline;
}


</style>
