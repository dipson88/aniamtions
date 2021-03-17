<template>
  <div class="matches">
    <h2>
      Today matches
    </h2>
    <div
      v-for="match in matches"
      :key="match.id"
      class="matches__container"
    >
      <div
        class="matches__title"
        @click="onIconClick(match.id)"
      >
        {{ match.title }}
        <ExpandLessIcon
          v-if="match.show"
          class="matches__icon"
        />
        <ExpandMoreIcon
          v-else
          class="matches__icon"
        />
      </div>
      <transition name="matches__list">
        <MatchesList
          v-if="match.show"
          :matches="match.data"
          class="matches__list"
        />
      </transition>
    </div>
  </div>
</template>

<script>
import { data, enums } from '@/utils'
import MatchesList from './MatchesList'
import { ExpandLessIcon, ExpandMoreIcon } from '@/components/icons'

export default {
  name: 'Matches',
  components: {
    MatchesList,
    ExpandLessIcon,
    ExpandMoreIcon
  },
  data () {
    return {
      matches: [
        {
          id: 1,
          title: 'Europe',
          data: data.matchesData.filter(item => item.matchType === enums.MatchesTypes.Europe),
          show: true
        },
        {
          id: 2,
          title: 'England',
          data: data.matchesData.filter(item => item.matchType === enums.MatchesTypes.England),
          show: true
        },
        {
          id: 3,
          title: 'Belarus',
          data: data.matchesData.filter(item => item.matchType === enums.MatchesTypes.Belarus),
          show: true
        }
      ]
    }
  },
  methods: {
    onIconClick (id) {
      console.log(id)
      const item = this.matches.find(item => item.id === id)
      item.show = !item.show
    }
  }
}
</script>

<style lang="scss">
.matches {
  &__title {
    margin: 10px 0;
    font-weight: 600;
    display: flex;
    align-items: center;
    cursor: pointer;

    &:hover {
      color:#999A9D;
    }
  }

  &__list {
    max-width: 600px;

    &-enter-active,
    &-leave-active {
      transition: all 0.2s;
    }

    &-enter,
    &-leave-to {
      opacity: 0;
      transform: translateX(30px);
    }
  }
}
</style>
