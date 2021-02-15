<template>
  <div class="transition-vue">
    <div
      class="transition-vue__single animate__animated animate__bounceInRight"
    >
      <h2 class="transition-vue__header">1. Single Components</h2>
      <label v-for="item in news" :key="item.newsType">
        <input
          name="news"
          type="radio"
          :value="item.newsType"
          :checked="selectedNewsType === item.newsType"
          @input="onSelectNewsType(item.newsType)"
        />
        {{ item.name }}
      </label>
      <transition
        mode="out-in"
        enter-active-class="animate__animated animate__fadeInBottomRight"
        leave-active-class="animate__animated animate__fadeOutBottomRight"
      >
        <p
          v-if="selectedNewsType === newsTypes.hotNews"
          key="hot"
          class="transition-vue__news"
        >
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
        <p v-else key="today" class="transition-vue__news">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using 'Content here, content here', making it
          look like readable English. Many desktop publishing packages and web
          page editors now use Lorem Ipsum as their default model text, and a
          search for 'lorem ipsum' will uncover many web sites still in their
          infancy. Various versions have evolved over the years, sometimes by
          accident, sometimes on purpose (injected humour and the like).
        </p>
      </transition>
    </div>
    <div class="transition-vue__group animate__animated animate__bounceInRight">
      <h2 class="transition-vue__header">2. Transition Group</h2>
      <TransitionVueGroup />
    </div>
  </div>
</template>

<script>
import TransitionVueGroup from "./TransitionVueGroup";

const newsTypes = {
  hotNews: 1,
  todayNews: 2,
};
const news = [
  {
    newsType: newsTypes.hotNews,
    name: "Hot News",
  },
  {
    newsType: newsTypes.todayNews,
    name: "Today News",
  },
];

export default {
  name: "TransitionVue",
  components: {
    TransitionVueGroup,
  },
  data() {
    return {
      selectedNewsType: newsTypes.hotNews,
      newsTypes,
      news,
    };
  },
  methods: {
    onSelectNewsType(newsType) {
      this.selectedNewsType = newsType;
    },
  },
};
</script>

<style lang="scss">
.transition-vue {
  max-width: 500px;

  &__news {
    max-width: 500px;
  }

  &__single {
    max-width: 500px;
  }

  &__header {
  }
}
</style>