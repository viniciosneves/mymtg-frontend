import Dashbord from './main/components/Dashbord'
import NotFound from './main/components/NotFound'

export default [
  {
    path: '/dashbord',
    name: 'main',
    component: Dashbord
  },
  {
    path: '/notfound',
    name: 'notfound',
    component: NotFound
  },
  {
    path: '/',
    redirect: '/dashbord'
  },
  {
    path: '*',
    redirect: '/notfound'
  }
]
