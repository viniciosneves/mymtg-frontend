import Request from 'src/common/http/Request'

class MyMtgModel {
  constructor () {
    this._request = this._defineRequest()
    this._resourceName = this.defineResourceName()
  }

  _defineRequest () {
    return Request.getInstance()
  }

  defineResourceName () {
    throw new Error('You need to provide a resource name to use MyMtgModel with defineResourceName method')
  }

  all (query = {}) {
    return this._request.get(this._resourceName, query)
  }

  get (id) {
    if (!id) {
      throw new Error('You need to pass a id to use get of MyMtgModel instance')
    }
    return this._request.get(`${this._resourceName}/${id}`)
  }

  create (data) {
    if (!data) {
      throw new Error('You need to pass a data object to update the resource')
    }
    return this._request.post(this._resourceName, data)
  }

  update (id, data) {
    if (!data) {
      throw new Error('You need to pass a data object to update the resource')
    }
    return this._request.put(`${this._resourceName}/${id}`, data)
  }

  delete (id) {
    if (!id) {
      throw new Error('You need to pass a id to use delete of MyMtgModel instance')
    }
    return this._request.delete(`${this._resourceName}/${id}`)
  }

}

export default MyMtgModel
