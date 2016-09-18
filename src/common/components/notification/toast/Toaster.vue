class Toaster {

  constructor (cmp) {
    this.cmp = cmp
    this.theme = ''

    this.cmp.$refs.toast.setOptions({
      position: 'bottom right'
    })
  }

  show (msg, options) {
    this.cmp.$refs.toast.showToast(msg, Object.assign({theme: this.theme, timeLife: 3000, closeBtn: true}, options))
  }

  error (msg, options) {
    this.theme = 'error'
    this.show(msg, options)
  }

  info (msg, options) {
    this.theme = 'info'
    this.show(msg, options)
  }
}

export default Toaster
