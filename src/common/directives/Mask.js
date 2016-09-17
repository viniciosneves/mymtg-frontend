import Vue from 'vue'
import $ from 'jquery'
import mask from 'jquery-mask-plugin'

/**
* chars used to mask :
* 0 - for numeric
* A - for alphabetical and numerical
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
      this.maskConfig = this.doConfig(expression)
    }

    if (this.maskConfig.raw) {
      this.applyMask(this.maskConfig.raw)
    } else {
      this.maskWithOptions()
    }
  },

  doConfig: (expression) => {
    if (this.maskTypes.contains(expression)) {
      return {
        type: expression
      }
    }

    return {
      raw: expression
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
    currency: (directive) => {
      directive.applyMask('#.##0,00', {
        reverse: true
      })
    }
    // 'date',
    // 'phone',
    // 'ip',
    // 'data_hour'
  },

  applyMask: function (maskValue, extraOptions) {
    $(this.el).mask(maskValue, this.getPluginOptions(extraOptions))
  },

  getPluginOptions: function (extraOptions) {
    return Object.assign({
      translation: {
        '0': {pattern: /\d/},
        '9': {pattern: /\d/, optional: true},
        '#': {pattern: /\d/, recursive: true},
        'A': {pattern: /[a-zA-Z0-9]/},
        'S': {pattern: /[a-zA-Z]/}
      },
      reverse: this.modifiers.reverse
    }, extraOptions || {})
  }

})
