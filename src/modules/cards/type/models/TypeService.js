import MyMtgModel from 'src/common/models/MyMtgModel'

class TypeService extends MyMtgModel {

  defineResourceName () {
    return 'type'
  }

  permanents () {
    return this.all({ permanent: 1 })
  }

  NonPermanents () {
    return this.all({ permanent: 0 })
  }
}

export default TypeService
