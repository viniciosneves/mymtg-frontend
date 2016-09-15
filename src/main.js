import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import cardRoutes from './modules/cards/routes'
import globalRoutes from './modules/global/routes'

Vue.use(VueRouter)

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
