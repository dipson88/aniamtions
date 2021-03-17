<template>
  <div class="main-layout">
    <SideBar
      :options="sideBarOptions"
      class="main-layout__side-bar"
    />
    <div class="main-layout__content">
      <transition
        name="main-layout__content"
        mode="out-in"
      >
        <router-view />
      </transition>
    </div>
  </div>
</template>

<script>
import SideBar from '@/components/SideBar'
import { routerHelper } from '@/utils'

const sideBarIds = {
  cssAnimations: 1,
  transitionVue: 2,
  news: 3,
  matches: 4,
  motions: 5
}

const sideBarOptions = [
  {
    name: 'Css Animations',
    id: sideBarIds.cssAnimations,
    routeName: routerHelper.names.CssAnimations
  },
  {
    name: 'Transition Vue',
    id: sideBarIds.transitionVue,
    routeName: routerHelper.names.TransitionVue
  },
  {
    name: 'News',
    id: sideBarIds.news,
    routeName: routerHelper.names.News
  },
  {
    name: 'Matches',
    id: sideBarIds.matches,
    routeName: routerHelper.names.Matches
  },
  {
    name: 'Motions',
    id: sideBarIds.motions,
    routeName: routerHelper.names.Motions
  }
]

export default {
  name: 'Animations',
  components: { SideBar },
  data () {
    return {
      sideBarOptions
    }
  }
}
</script>

<style lang="scss">
.main-layout {
  display: flex;
  max-height: 100vh;

  &__content {
    overflow-x: hidden;
    width: 100%;
    margin-left: 10px;

    &-enter-active,
    &-leave-active {
      transition: all 0.3s ease;
    }

    &-enter,
    &-leave-to {
      opacity: 0;
      transform: translateX(100px);
    }
  }
}
</style>
