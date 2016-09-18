import 'toastr/toastr.scss'
import toastr from 'toastr'

export class Toast {

  constructor (options) {
    let defaultOption = {
      'closeButton': true,
      'debug': false,
      'newestOnTop': false,
      'progressBar': false,
      'positionClass': 'toast-bottom-right',
      'preventDuplicates': false,
      'showDuration': '300',
      'hideDuration': '1000',
      'timeOut': '5000',
      'extendedTimeOut': '1000',
      'showEasing': 'swing',
      'hideEasing': 'linear',
      'showMethod': 'fadeIn',
      'hideMethod': 'fadeOut'
    }

    this._applyOptions(defaultOption)
    this._applyOptions(options)
  }

  error (message, title) {
    toastr.error(message, title)
  }

  info (message, title) {
    toastr.info(message, title)
  }

  success (message, title) {
    toastr.success(message, title)
  }

  warning (message, title) {
    toastr.warning(message, title)
  }

  _applyOptions (options) {
    toastr.options = Object.assign(options || {}, toastr.options)
  }

}

export let toast = new Toast()
