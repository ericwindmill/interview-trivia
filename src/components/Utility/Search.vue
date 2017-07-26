<template>
  <div class='Search'>
    <input placeholder='Search...' class='Search--Input' @keyup='handleSearch' v-model='searchTerm' type='text'></input>
    <button class='Search--Button'> Search </button>
  </div>
</template>

<script>
import {eventBus} from '../../main'

export default {
  data() {
    return {
      searchTerm: this.searchTerm
    }
  },
  methods: {
    handleSearch() {
      eventBus.$emit('userSearching', this.searchTerm)
    }
  }
}
</script>

<style>
.Search {
  display: flex;
  width: 100%;
  /*padding-bottom: var(--spacing-unit)*/
}
.Search--Input {
  padding: 5px;
  height: var(--spacing-unit);
  width: 100%;
  border: none;
  border: 1px solid var(--purple);
}

.Search--Input:focus {
  border: 1px solid var(--purple);
  box-shadow: 0px 0px 1px var(--brand-color);
}

.Search--Button {
  padding: 5px;
  background-color: var(--purple);
  color: white;
  border: none;
}

.Search--Button:hover {
  cursor: pointer;
}

</style>
