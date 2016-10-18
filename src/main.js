import Vue from 'vue'
import MainStore from 'src/common/store/MainStore'
import App from './modules/global/main/components/App'

import 'bootstrap-sass/assets/stylesheets/_bootstrap.scss'
import './common/directives/Directives'
// import './common/validators/Validators'

import router from './router'

new Vue({
  store: MainStore,
  router,
  el: '#app',
  render: h => h(App)
})
