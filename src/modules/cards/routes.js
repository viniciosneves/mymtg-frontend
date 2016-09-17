import MainArtist from './artist/Main'
import CreateArtist from './artist/CreateArtist'
import Menu from './Menu'

export default {
  '/cards': {
    component: Menu
  },
  '/cards/artist': {
    component: MainArtist
  },
  '/cards/artist/new': {
    component: CreateArtist,
    name: 'createartist'
  }
}
