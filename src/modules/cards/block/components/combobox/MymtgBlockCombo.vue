<template>
  <div>
    <mymtg-combo :selected="selected"
                 :data="data"
                 :showDefaultOption="true"
                 defaultText="Select a Block"
                 @select="itemSelected" ></mymtg-combo>
  </div>
</template>


<script type="text/javascript">
import MymtgCombo from 'components/combobox/MymtgCombo'
import BlockService from 'cards/block/models/BlockService'
import MymtgRemoteCombo from 'components/combobox/mixins/MymtgRemoteCombo'
export default {
  name: 'MymtgBlockCombo',
  mixins: [
    MymtgRemoteCombo
  ],
  created: function () {
    this.model = new BlockService()
  },
  components: {
    MymtgCombo
  },
  methods: {
    format: function (data) {
      return data.map((item) => {
        return { value: item.id, text: item.name }
      })
    }
  }
}
</script>

<style type="text/css">
  
</style>