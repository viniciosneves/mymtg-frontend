import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './modules/global/main/components/App'

import 'bootstrap-sass/assets/stylesheets/_bootstrap.scss'
import './common/directives/Directives'
import './common/validators/Validators'

import cardRoutes from './modules/cards/routes'
import globalRoutes from './modules/global/routes'

Vue.use(VueRouter)

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
