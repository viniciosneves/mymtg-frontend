import $ from 'jquery'
import config from 'src/config'

class JsonRequest {

  constructor (baseUrl = config.baseUrl) {
    this.baseUrl = baseUrl
  }

  get (uri, data) {
    return $.getJSON(this._compileUrl(uri), data)
  }

  post (uri, data = {}) {
    return this._send(uri, 'POST', data)
  }

  put (uri, data = {}) {
    data._method = 'PUT'
    return this._send(uri, 'PUT', data)
  }

  delete (uri, data = {}) {
    data._method = 'DELETE'
    return this._send(uri, 'DELETE', data)
  }

  option (uri, data = {}) {
    return this._send(uri, 'OPTION', data)
  }

  _compileUrl (uri) {
    return `${this.baseUrl}/${uri}`
  }

  _send (uri, method = 'POST', data = {}) {
    return $.ajax({
      method: method,
      url: this._compileUrl(uri),
      data: JSON.stringify(data),
      contentType: 'application/json'
    })
  }

}

export default JsonRequest
