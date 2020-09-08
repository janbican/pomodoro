import Vue from 'vue'
import App from './App.vue'
import { store } from './store/main.js'
import VModal from 'vue-js-modal'

Vue.config.productionTip = false

Vue.use(VModal)

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
