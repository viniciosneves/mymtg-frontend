import MainArtist from './artist/components/crud/Main'
import ArtistForm from './artist/components/crud/ArtistForm'
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
