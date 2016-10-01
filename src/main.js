import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './modules/global/main/components/App'

import 'bootstrap-sass/assets/stylesheets/_bootstrap.scss'
import './common/directives/Directives'
// import './common/validators/Validators'

import cardRoutes from './modules/cards/routes'
import globalRoutes from './modules/global/routes'

Vue.use(VueRouter)

let router = new VueRouter({
  mode: 'history',
  routes: [...cardRoutes, ...globalRoutes]
})

const app = new Vue({
  router,
  ...App
})

app.$mount('#apps')
