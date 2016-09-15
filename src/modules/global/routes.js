import Dashbord from './dashbord/components/Main'
import NotFound from './common/components/NotFound'

export default {
  '/dashbord': {
    name: 'main',
    component: Dashbord
  },
  '/notfound': {
    name: 'notfound',
    component: NotFound
  }
}
