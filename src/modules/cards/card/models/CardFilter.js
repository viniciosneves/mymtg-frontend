import MyMtgFilter from 'src/common/models/MyMtgFilter'

class CardFilter extends MyMtgFilter {

  constructor () {
    super()

    this.name = null
    this.types_ids = []
    this.colors_ids = []
    this.rarety_ids = []
    this.edition_ids = []
  }

  clean () {
    this.name = null
    this.types_ids = []
    this.colors_ids = []
    this.rarety_ids = []
    this.edition_ids = []
  }

}

export default CardFilter
