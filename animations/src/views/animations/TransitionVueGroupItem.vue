<template>
  <tr class="transition-vue-group-item">
    <td class="transition-vue-group-item__status">
      {{ status }}
      <div class="transition-vue-group-item__status-indicator" />
    </td>
    <td class="transition-vue-group-item__home">
      {{ mainInfo.homeTeam }}
    </td>
    <td class="transition-vue-group-item__score">
      <span>
        {{ mainInfo.homeTeamScore }}
      </span>
      <span>
        {{ mainInfo.guestTeamScore }}
      </span>
    </td>
    <td class="transition-vue-group-item__guest">
      {{ mainInfo.guestTeam }}
    </td>
    <td class="transition-vue-group-item__description">
      {{ description }}
    </td>
  </tr>
</template>

<script>
export default {
  name: 'TransitionVueGroupItem',
  props: {
    status: {
      type: String,
      default: ''
    },
    description: {
      type: String,
      default: ''
    },
    mainInfo: {
      type: Object,
      default: () => {}
    }
  }
}
</script>

<style lang="scss">
.transition-vue-group-item {
  border-bottom: 1px solid #e4e4e4;
  height: 30px;
  background-color: #f4f4f4;

  &:hover {
    background-color: #e4e4e4;
  }

  &__home {
    text-align: right;
  }

  &__home,
  &__guest {
    width: 125px;
    min-width: 125px;
  }

  &__score {
    padding: 0 5px;
    text-align: center;
  }

  &__status {
    display: flex;
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
