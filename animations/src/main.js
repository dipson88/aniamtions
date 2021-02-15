import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueMotion from 'vue-motion'

Vue.config.productionTip = false
Vue.use(VueMotion)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
