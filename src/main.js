import 'hacktimer' // second interval works if tab is inactive
import Vue from 'vue'
import App from './App.vue'
import { store } from './store/index.js'
import VModal from 'vue-js-modal'

Vue.use(VModal)

import { library } from '@fortawesome/fontawesome-svg-core'
import { faSlidersH } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faSlidersH)
Vue.component('font-awesome-icon', FontAwesomeIcon)

import vueHeadful from 'vue-headful' // set title in component

Vue.component('vue-headful', vueHeadful)

Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
