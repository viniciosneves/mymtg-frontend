export default {
  mixinName: 'MymtgRemoteComboMixin',
  beforeMount: function () {
    if (!!this.model === false) {
      throw new Error(`to use ${this.mixinName} mixin you should provide a model`)
    }
    this.loadData()
  },
  props: {
    filter: {
      type: Object,
      default: function () {
        return { mode: this.defaultMode || 'all', query: this.defaultQuery || {} }
      }
    },
    selected: {}
  },
  methods: {
    itemSelected: function (item) {
      this.$emit('select', item)
    },
    loadData: function () {
      this.model[this.filter.mode](this.filter.query)
      .then((res) => { this.loaded(res) }, (err) => { this.errorLoading(err) })
    },
    loaded: function (res) {
      this.data = this.format(res.data)
    },
    errorLoading: function (err) {
      console.log(err)
    },
    format: function (data) {
      throw new Error(`No format method provided to ${this.mixinName}`)
    }
  },
  data: function () {
    return {
      model: null,
      data: []
    }
  }
}
