import vue from 'vue'
import config from 'src/config'

const myVue = vue

class ApiModel {

  constructor (resourceName) {
    this._baseUrl = config.baseUrl
    this._resourceName = resourceName
    this.resource = myVue.$http.resource(this._compileResource())
  }

  get (id) {
    return this.resource.get({ id: id })
  }

  _compileResource () {
    return `${this.baseUrl}/${this.resource}{/id}`
  }
}

export default ApiModel
