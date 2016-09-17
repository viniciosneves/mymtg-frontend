import Vue from 'vue'
import $ from 'jquery'
import mask from 'jquery-mask-plugin'

/**
* chars used to raw mask :
* 0 - for numeric
* A - for alphabetical and numerical
* 9 - numeric optional
* S - alphabetic char
* modifiers to use :
* clear: to clean the input if not match the mask
*/
export default Vue.directive('mask', {

  maskPlugin: null,

  maskConfig: null,

  bind () {
    this.maskPlugin = mask
    this.jquery = $
  },

  update (expression) {
    if (typeof expression === 'object') {
      this.maskConfig = expression
    } else {
      this.maskConfig = this.doConfig()
    }

    if (this.maskConfig.raw) {
      this.applyMask(this.maskConfig.raw)
    } else {
      this.maskWithOptions()
    }
  },

  doConfig: function () {
    if (Object.keys(this.maskTypes).indexOf(this.expression) !== -1) {
      return {
        type: this.expression
      }
    }

    return {
      raw: this.expression
    }
  },

  maskWithOptions: function () {
    if (!this.maskConfig.type) {
      throw new Error('No type or raw passed to mask')
    }

    for (let type in this.maskTypes) {
      if (type === this.maskConfig.type) {
        this.maskTypes[this.maskConfig.type](this)
      }
    }
  },

  maskTypes: {
    currency: function (directive) {
      directive.applyMask('#.##0,00', {
        reverse: true
      })
    },
    date: function (directive) {
      let timeMask = directive.modifiers.time ? ' 00:00:00' : ''

      directive.applyMask(`00/00/0000${timeMask}`)
    },
    phone: function (directive) {
      directive.applyMask('(00) 0000-00009')
    }
  },

  applyMask: function (maskValue, extraOptions) {
    $(this.el).mask(maskValue, this.getPluginOptions(extraOptions))
  },

  getPluginOptions: function (extraOptions) {
    return Object.assign(extraOptions || {}, {
      translation: {
        '0': {pattern: /\d/},
        '9': {pattern: /\d/, optional: true},
        '#': {pattern: /\d/, recursive: true},
        'A': {pattern: /[a-zA-Z0-9]/},
        'S': {pattern: /[a-zA-Z]/}
      },
      clearIfNotMatch: this.modifiers.clear

    })
  }

})
