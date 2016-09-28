import axios from 'axios'
import { serverConfig } from 'src/config'
import Vue from 'vue'
export default class Request {

  constructor (config = {}) {
    this._config = serverConfig
    this._vue = Vue
    this._axios = axios.create(Object.assign(this._config, config))
  }

  get (url, data = {}) {
    return this._send(url, 'GET', data)
  }

  post (url, data = {}) {
    return this._send(url, 'POST', data)
  }

  put (url, data = {}) {
    data._method = 'PUT'
    return this._send(url, 'PUT', data)
  }

  delete (url, data = {}) {
    data._method = 'DELETE'
    return this._send(url, 'DELETE', data)
  }

  option (url, data = {}) {
    return this._send(url, 'OPTION', data)
  }

  _send (url, method = 'GET', data = {}) {
    return this._axios.request({
      url: url,
      method: method,
      params: method === 'GET' ? data : null,
      data: method !== 'GET' ? data : null
    }).then(function (certo) {
      console.log('certo', certo)
    }, function (erro, q) {
      debugger
      console.log('eero', erro, q)
    })
  }
}
