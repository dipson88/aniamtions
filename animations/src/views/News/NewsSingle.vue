<template>
  <div class="news-single">
    <h2 class="news-single__title">
      {{ contentData.title }}
    </h2>
    <img
      :src="contentData.imgPath"
      class="news-single__img"
    />
    <p class="news-single__info">
      {{ contentData.date }}
    </p>
    <p class="news-single__text">
      {{ contentData.text }}
    </p>
  </div>
</template>

<script>
import { data, routerHelper } from '@/utils'
import ArrowBackIcon from '@/components/icons/ArrowBackIcon'

export default {
  name: 'NewsSingle',
  components: {
    ArrowBackIcon
  },
  props: {
    newsId: {
      type: [Number, String],
      default: null
    }
  },
  data () {
    return {
      newsData: data.newsData
    }
  },
  computed: {
    contentData () {
      return this.newsData.find(item => item.id === Number(this.newsId)) ?? {}
    }
  },
  methods: {
    onBack () {
      this.$router.push({ name: routerHelper.names.News })
    }
  }
}
</script>

<style lang="scss">
.news-single {
  position: relative;
  padding: 0 20px;
  max-width: 900px;
  display: flex;
  flex-direction: column;

  &__info {
    color: #9B9B9C;
    font-size: 13px;
    margin: 10px 0 0 0;
  }

  &__img {
    width: 100%;
    height: 100%;
    max-height: 500px;
    max-width: 900px;
    align-self: center;
  }
}
</style>
