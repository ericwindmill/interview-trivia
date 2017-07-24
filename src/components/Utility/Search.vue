<template>
  <input @keyup='handleSearch' v-model='searchTerm' type='text'></input>
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
</style>
