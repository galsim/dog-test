import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/style.scss'

Vue.config.productionTip = false

Vue.filter('firstUpperCase', function (value) {
  if (!value) return ''
  return value.toString()[0].toUpperCase() + value.toString().slice(1)
})

export const eventBus = new Vue()

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
