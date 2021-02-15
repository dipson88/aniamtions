<template>
  <li class="matches-list-item">
    <div class="matches-list-item__status">
      {{ statusName }}
      <div
        v-if="showLiveIcon"
        class="matches-list-item__status-indicator"
      />
    </div>
    <div class="matches-list-item__home-team">
      {{ homeTeam }}
    </div>
    <div class="matches-list-item__home-score">
      {{ homeTeamScore }}
    </div>
    <div class="matches-list-item__guest-score">
      {{ guestTeamScore }}
    </div>
    <div class="matches-list-item__guest-team">
      {{ guestTeam }}
    </div>
    <div class="matches-list-item__description">
      {{ description }}
    </div>
  </li>
</template>

<script>
import { enums } from '@/utils'

export default {
  name: 'MatchesListItem',
  props: {
    status: {
      type: Number,
      default: 0
    },
    homeTeam: {
      type: String,
      default: 'N/A'
    },
    guestTeam: {
      type: String,
      default: 'N/A'
    },
    homeTeamScore: {
      type: Number,
      default: 0
    },
    guestTeamScore: {
      type: Number,
      default: 0
    },
    description: {
      type: String,
      default: 'N/A'
    }
  },
  computed: {
    showLiveIcon () {
      return this.status === enums.MatchStatus.Live
    },
    statusName () {
      const names = {
        [enums.MatchStatus.Live]: "live",
        [enums.MatchStatus.Pending]: "pending",
        [enums.MatchStatus.Finished]: "finished"
      }

      return names[this.status]
    }
  }
}
</script>

<style lang="scss">
.matches-list-item {
  display: flex;
  align-items: center;
  height: 30px;

  &__status {
    width: 50px;
  }

  &__home-score,
  &__guest-score {
    width: 50px;
  }

  &__home-team,
  &__home-score {
    text-align: right;
    padding-right: 10px;
  }

  &__guest-score {
    text-align: left;
  }

  &__home-team,
  &__guest-team {
    width: 150px;
    overflow: hidden;
  }

  &:hover {
    background-color: #DADCE0;
  }

  @keyframes indicator {
    from {
      background-color: red;
    }

    to {
      background-color: transparent;
    }
  }

  &__status-indicator {
    height: 7px;
    width: 7px;
    background-color: red;
    display: inline-block;
    margin-left: 5px;
    border-radius: 50%;
    align-self: center;

    animation-name: indicator;
    animation-iteration-count: infinite;
    animation-duration: 2s;
  }
}
</style>