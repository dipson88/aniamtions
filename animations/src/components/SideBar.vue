<template>
  <div
    :class="sideBarClassName"
    class="side-bar"
  >
    <button
      class="side-bar__button"
      @click="resizeSideBar"
    >
      <component :is="iconComponent" />
    </button>
    <router-link
      v-show="isOpen"
      v-for="option in options"
      :key="option.id"
      :to="{ name: option.routeName }"
      class="side-bar__item"
    >
      {{ option.name }}
    </router-link>
  </div>
</template>

<script>
import { ArrowBackIcon, ListIcon } from '@/components/icons'

export default {
  name: 'SideBar',
  props: {
    options: {
      type: Array,
      default: () => []
    }
  },
  data () {
    return {
      isOpen: true
    }
  },
  computed: {
    iconComponent () {
      return this.isOpen ? ArrowBackIcon : ListIcon
    },
    sideBarClassName () {
      return !this.isOpen ? 'side-bar--closed' : ''
    }
  },
  methods: {
    resizeSideBar () {
      this.isOpen = !this.isOpen
    }
  }
}
</script>

<style lang="scss">
.side-bar {
  $selected-background-color: lighten(#0747A6, 10%);

  background-color: #0747A6;
  height: 100%;
  min-height: 100vh;
  width: 200px;
  min-width: 200px;
  transition: all 0.5s;

  &__button {
    background-color: transparent;
    border: none;
    cursor: pointer;
    width: 100%;
    height: 30px;
  }

  &__item {
    display: block;
    padding: 10px;
    text-decoration: none;
    transition: background-color 0.4s;
    white-space: nowrap;

    &.router-link-active {
      background-color: $selected-background-color;
    }
  }

  &__button,
  &__item {
    color: #FFFFFF;
    font-weight: 600;
    font-size: 16px;

    &:hover {
      background-color: $selected-background-color;
    }
  }

  &--closed {
    width: 45px;
    min-width: 45px;
  }
}
</style>
