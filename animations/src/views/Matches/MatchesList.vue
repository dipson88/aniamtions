<template>
  <ul class="matches-list">
    <MatchesListItem
      v-for="data in matches"
      :key="data.id"
      v-bind="data"
      class="matches-list__item"
    />
  </ul>
</template>

<script>
import MatchesListItem from './MatchesListItem'
export default {
  name: 'MatchesList',
  components: {
    MatchesListItem
  },
  props: {
    matches: {
      type: Array,
      default: () => ([])
    }
  }
}
</script>

<style lang="scss">
.matches-list {
  margin: 0;
  padding: 0;
  list-style-type: none;

  &__item {
    border-top: 1px solid #DADCE0;
  }
}
</style>
