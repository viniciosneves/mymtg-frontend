import Menu from './Menu'
import MainArtist from './artist/components/crud/Main'
import ArtistForm from './artist/components/crud/Form'
import MainBlock from './block/components/crud/Main'
import BlockForm from './block/components/crud/Form'
let artistRoutes = [
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

let blockRoutes = [
  {
    path: '/cards/block',
    component: MainBlock,
    name: 'cards.block'
  },
  {
    path: '/cards/block/create',
    component: BlockForm,
    name: 'cards.block.create'
  },
  {
    path: '/cards/block/update/:id',
    component: BlockForm,
    name: 'cards.block.update'
  }
]

export default [
  {
    path: '/cards',
    component: Menu
  },
  ...artistRoutes,
  ...blockRoutes
]
