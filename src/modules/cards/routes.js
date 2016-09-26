import MainArtist from './artist/Main'
import ArtistForm from './artist/ArtistForm'
import Menu from './Menu'

export default {
  '/cards': {
    component: Menu
  },
  '/cards/artist': {
    component: MainArtist,
    name: 'mainArtist'
  },
  '/cards/artist/create': {
    component: ArtistForm,
    name: 'createArtist'
  },
  '/cards/artist/update/:id': {
    component: ArtistForm,
    name: 'updateArtist'
  }
}
