import Vue from 'vue'
import App from './App'
import store from './store'
import i18n from './lang'

Vue.prototype.$store = store
Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
  store,
  i18n,
  ...App
})
app.$mount()
