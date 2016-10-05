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
    name: 'cards.artist'
  },
  {
    path: '/cards/artist/create',
    component: ArtistForm,
    name: 'cards.artist.create'
  },
  {
    path: '/cards/artist/update/:id',
    component: ArtistForm,
    name: 'cards.artist.update'
  }
]
