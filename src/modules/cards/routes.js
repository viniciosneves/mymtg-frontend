import MainArtist from './artist/components/crud/Main'
import ArtistForm from './artist/components/crud/Form'
import Menu from './Menu'

export default [
  {
    path: '/cards',
    component: Menu
  },
  {
    path: '/cards/artist',
    component: MainArtist,
    name: 'mainArtist'
  },
  {
    path: '/cards/artist/create',
    component: ArtistForm,
    name: 'createArtist'
  },
  {
    path: '/cards/artist/update/:id',
    component: ArtistForm,
    name: 'updateArtist'
  }
]
