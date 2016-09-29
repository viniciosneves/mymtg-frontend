import axios from 'axios'
import { serverConfig } from 'src/config'
import { toast } from 'src/common/components/notification/toast/Toast'
let _instance = null
export default class Request {

  constructor (config = {}) {
    this._config = serverConfig
    this._toast = toast
    this._axios = axios.create(Object.assign(this._config, config))
  }
  // can be used like a singleton
  static getInstance () {
    if (!_instance) {
      _instance = new Request()
    }
    return _instance
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
    let promise = this._axios.request({
      url,
      method,
      params: method === 'GET' ? data : null,
      data: method !== 'GET' ? data : null
    })

    return this._preparePromise(promise)
  }

  _preparePromise (promise) {
    promise.then((response) => { return this._addSuccessTransform(response) })
      .catch((error) => { return this._addErrorTransform(error) })
    return promise
  }

  _addSuccessTransform (response) {
    response.data = response.data.data
    return response
  }

  _addErrorTransform (error) {
    this._renderErroIfEnabled(error)

    if (!error.response) {
      return this._noResponse(error)
    }
    let httpStatus = error.response.status
    switch (httpStatus) {
      case 401: {
        //  need to change to Login/Relogin state
      }
    }
    return error.response
  }

  _renderErroIfEnabled (error) {
    if (!this._config.renderError) {
      return
    }

    if (!error.response) {
      this._toast.error('No connection with the server!', 'Connection lost')
    }
    let httpStatus = error.response.status
    switch (httpStatus) {
      case 400: {
        let errors = error.response.data.errors
        let detailMessage = ''
        for (let e in errors.detail) {
          detailMessage += `${e} : ${errors.detail[e].join(';')} </br>`
        }
        this._toast.error(detailMessage, errors.title)
        break
      }
      default: {
        this._toast.error(error.response.data.errors.title, error.response.data.errors.exception_name)
      }
    }
  }

  enableErrorRender () {
    this._config.renderError = true
  }

  disableErrorRender () {
    this._config.renderError = false
  }

  _noResponse (error) {
    return error
  }
}
