import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import vueResource from 'vue-resource'
import 'bootstrap-sass/assets/stylesheets/_bootstrap.scss'
import 'vue-toast/dist/vue-toast.min.css'
import './common/directives/Directives'
import './common/validators/Validators'

import cardRoutes from './modules/cards/routes'
import globalRoutes from './modules/global/routes'
Vue.use(VueRouter)
Vue.use(vueResource)

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
