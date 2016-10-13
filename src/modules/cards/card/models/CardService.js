import MyMtgModel from 'src/common/models/MyMtgModel'

class CardService extends MyMtgModel {

  defineResourceName () {
    return 'card'
  }
}

export default CardService
