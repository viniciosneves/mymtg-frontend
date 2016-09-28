import Dashbord from './main/components/Dashbord'
import NotFound from './main/components/NotFound'

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
