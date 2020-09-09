import Vue from 'vue'
import App from './App.vue'
import { store } from './store/index.js'
import VModal from 'vue-js-modal'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faSlidersH } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

Vue.use(VModal)

library.add(faSlidersH)
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
