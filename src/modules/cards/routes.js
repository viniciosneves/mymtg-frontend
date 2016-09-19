import MainArtist from './artist/Main'
import Menu from './Menu'

export default {
  '/cards': {
    component: Menu
  },
  '/cards/artist': {
    component: MainArtist,
    name: 'mainartist'
  }
}
