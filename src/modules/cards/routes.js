import MainArtist from './artist/Main'
import CreateArtist from './artist/CreateArtist'
import Menu from './Menu'

export default {
  '/cards': {
    component: Menu
  },
  '/cards/artist': {
    component: MainArtist,
    name: 'mainartist'
  },
  '/cards/artist/new': {
    component: CreateArtist,
    name: 'createartist'
  },
  '/cards/artist/update/:artist-id': {
    component: CreateArtist,
    name: 'updateartist'
  }
}
