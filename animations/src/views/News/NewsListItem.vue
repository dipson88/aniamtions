<template>
  <li
    class="news-list-item"
    @click="$emit('select', id)"
  >
    <h2 class="news-list-item__title">
      {{ title }}
    </h2>
    <img
      :src="imgPath"
      class="news-list-item__img"
    />
    <p class="news-list-item__info">
      {{ infoRow }}
    </p>
  </li>
</template>

<script>
export default {
  name: 'NewsListItem',
  props: {
    id: {
      type: Number,
      default: null
    },
    title: {
      type: String,
      default: ''
    },
    date: {
      type: Date,
      default: null
    },
    imgPath: {
      type: String,
      default: ''
    }
  },
  computed: {
    infoRow () {
      return this.date
    }
  }
}
</script>

<style lang="scss">
.news-list-item {
  border: 1px solid #DADCE0;
  border-radius: 4px;
  padding: 15px;
  max-width: 500px;

  &__img {
    width: 100%;
    height: 100%;
    max-width: 500px;
    max-height: 285px;
  }

  &__title {
    margin: 0 0 10px 0;
  }

  &__info {
    color: #9B9B9C;
    font-size: 13px;
    margin: 10px 0 0 0;
  }

  &:hover {
    cursor: pointer;
    background-color: #E4E6EA;
  }
}
</style>
