<template>
  <ul class="news-list">
    <NewsListItem
      v-for="data in newsData"
      :key="data.id"
      :id="data.id"
      :title="data.title"
      :date="data.date"
      :img-path="data.imgPath"
      class="news-list__item"
      @select="$emit('select', $event)"
    />
  </ul>
</template>

<script>
import NewsListItem from './NewsListItem'

export default {
  name: 'News',
  components: { NewsListItem },
  props: {
    newsData: {
      type: Array,
      default: () => ([])
    }
  }
}
</script>

<style lang="scss">
.news-list {
  margin: 0;
  padding: 0;
  list-style-type: none;

  &__item {
    margin: 15px 0;
    margin-right: 10px;
  }
}
</style>