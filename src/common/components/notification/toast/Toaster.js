import 'toastr/toastr.scss'
import toastr from 'toastr'

class Toaster {

  constructor () {
    toastr.options = {
      'closeButton': true,
      'debug': false,
      'newestOnTop': false,
      'progressBar': false,
      'positionClass': 'toast-bottom-left',
      'preventDuplicates': false,
      'showDuration': '300',
      'hideDuration': '1000',
      'timeOut': '3000',
      'extendedTimeOut': '1000',
      'showEasing': 'swing',
      'hideEasing': 'linear',
      'showMethod': 'fadeIn',
      'hideMethod': 'fadeOut'
    }
  }

  error (message, options) {
    this._applyOptions(options)
    toastr.error(message, options)
  }

  info (message, options) {
    this._applyOptions(options)
    toastr.info(message, options)
  }

  success (message, options) {
    this._applyOptions(options)
    toastr.success(message, options)
  }

  warning (message, options) {
    this._applyOptions(options)
    toastr.warning(message, options)
  }

  _applyOptions (options) {
    toastr.options = Object.assign(options, toastr.options)
  }

}

export default new Toaster()
