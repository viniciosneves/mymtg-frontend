<template>
  <div>
  <mymtg-combo :data="formated_data" @select="itemSelected" ></mymtg-combo>
  </div>
</template>


<script type="text/javascript">
import MymtgCombo from 'src/common/components/combobox/MymtgCombo'
import TypeService from 'src/modules/cards/type/models/TypeService'
export default {
  name: 'MymtgTypeCombo',
  created: function () {
    this.model = new TypeService()
    this.model[this.filterMode](this.filterQuery)
    .then((res) => { this.data = res.data }, function (err) { console.log(err) })
  },
  components: {
    MymtgCombo
  },
  props: {
    filterMode: {
      type: String,
      default: 'all'
    },
    filterQuery: {
      type: Object,
      default: function () {
        return {}
      }
    }
  },
  data: function () {
    return {
      model: null,
      data: []
    }
  },
  computed: {
    formated_data: function () {
      return this.data.map((item) => {
        return { value: item.id, text: item.name }
      })
    }
  },
  methods: {
    itemSelected: function (item) {
      console.log(item)
    }
  }
}

</script>


<style type="text/css">
  
</style>