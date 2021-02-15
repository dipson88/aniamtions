<template>
  <div class="transition-vue-group">
    <div class="transition-vue-group__table-header" />
    <transition-group
      class="transition-vue-group__table"
      name="transition-vue-group__table"
      tag="table"
    >
      <TransitionVueGroupItem
        v-for="data in matchData"
        :key="data.id"
        v-bind="data"
      />
    </transition-group>
    <a href="javascript:void(0)" @click="showAll"> Show All </a>
  </div>
</template>

<script>
import TransitionVueGroupItem from "./TransitionVueGroupItem";

const matchDataApi = [
  {
    id: 1,
    status: "live",
    mainInfo: {
      homeTeam: "PSV",
      homeTeamScore: 1,
      guestTeamScore: 0,
      guestTeam: "Arsenal",
    },
    description: "1st tour",
  },
  {
    id: 2,
    status: "live",
    mainInfo: {
      homeTeam: "BATE",
      homeTeamScore: 2,
      guestTeamScore: 1,
      guestTeam: "Dinamo Minsk",
    },
    description: "1st tour",
  },
  {
    id: 3,
    status: "live",
    mainInfo: {
      homeTeam: "FC Gomel",
      homeTeamScore: 0,
      guestTeamScore: 2,
      guestTeam: "Shahter",
    },
    description: "1st tour",
  },
];

export default {
  name: "TransitionVueGroup",
  components: {
    TransitionVueGroupItem,
  },
  data() {
    return {
      firstMatchData: matchDataApi.slice(0, 1),
      allMatchData: matchDataApi,
      isAllShown: false,
    };
  },
  computed: {
    matchData() {
      return this.isAllShown ? this.allMatchData : this.firstMatchData;
    },
  },
  methods: {
    showAll() {
      this.isAllShown = !this.isAllShown;
    },
  },
};
</script>

<style lang="scss">
.transition-vue-group {
  &__table {
    border-collapse: collapse;
    width: 100%;

    &-header {
      background-color: #949494;
      height: 20px;
    }

    &-enter-active,
    &-leave-active {
      transition: all 0.2s;
    }

    &-enter,
    &-leave-to {
      opacity: 0;
      transform: translateY(30px);
    }
  }
}
</style>