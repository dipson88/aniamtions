<template>
  <div class="news">
    <NewsList
      :news-data="newsData"
      class="news__list"
      @select="onSelectNews"
    />
  </div>
</template>

<script>
import  { data, routerHelper } from '@/utils'
import NewsList from './NewsList'

export default {
  name: 'News',
  components: {
    NewsList
  },
  data () {
    return {
      newsData: data.newsData
    }
  },
  methods: {
    onSelectNews (id) {
      this.$router.push({ name: routerHelper.names.NewsSingle , params: { newsId: id } })
    }
  }
}
</script>

<style lang="scss">
.news {
  padding: 0 20px;

  &__list {
    max-width: 1100px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
  }
  
}
</style>
