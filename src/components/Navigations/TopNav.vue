<template>
  <header class='TopNav'>
    <router-link class='TopNav--SiteHeader' tag='h1' to='/'>Phone Screen Hero</router-link>
    <router-link class='TopNav--Button' tag='button' to='/submit-question'>Submit Question</router-link>
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
  height: calc(var(--spacing-unit) * 4);
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.TopNav > h1 {
  color: white;
    border-bottom: var(--brand-color) 1px solid;
}

.TopNav > h1:hover {
  cursor: pointer;
  border-bottom: white 1px solid;
}

.TopNav--Button {
  width: 200px;
  padding: 20px;
  color: white;
  font-size: 1.2em;
  border: none;
  background-color: var(--blue-purple);
  background-image: linear-gradient(90deg, var(--blue-purple), var(--purple));
}

.TopNav--Button:hover {
  cursor: pointer;
  background-image: linear-gradient(180deg, var(--blue-purple), var(--purple));
}


</style>
