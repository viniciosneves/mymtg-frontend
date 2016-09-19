import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import vueResource from 'vue-resource'
import cardRoutes from './modules/cards/routes'
import globalRoutes from './modules/global/routes'
import 'bootstrap-sass/assets/stylesheets/_bootstrap.scss'
// import './assets/sass/Main.scss'
// import 'jquery/dist/jquery.js'
import 'vue-toast/dist/vue-toast.min.css'
import './common/directives/Directives'
import VueValidator from 'vue-validator'

Vue.use(VueValidator)
Vue.use(VueRouter)
Vue.use(vueResource)
/* eslint-disable no-new */
// new Vue({
//   el: 'body',
//   components: { App }
// })

let router = new VueRouter({
  hashbang: false,
  history: true,
  linkActiveClass: 'active'
})

/* Route Map */
router.map(Object.assign(globalRoutes,
                          cardRoutes))

/* Route Redirects */
router.redirect({
  '/': '/dashbord',
  '*': '/notfound'
})

/* Bootstrap routes to the main component */
router.start({
  components: { App }
}, 'body')
