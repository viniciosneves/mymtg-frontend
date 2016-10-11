import MyMtgModel from 'src/common/models/MyMtgModel'

class Artist extends MyMtgModel {

  defineResourceName () {
    return 'artist'
  }
}

export default Artist
