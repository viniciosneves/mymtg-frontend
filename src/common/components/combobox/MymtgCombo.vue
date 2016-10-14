<template>
<div>
  <select v-model="selectedItem" @change="selectItem" class="form-control mymtg-select">
    <option v-for="entry in data" :value="entry.value"  >{{ entry.text }}</option>
  </select>  
</div>
</template>


<script type="text/javascript">
export default {
  name: 'MymtgCombo',
  mounted: function () {
    if (this.selected != null) {
      this.selectedItem = this.selected
    }
  },
  props: {
    data: {
      required: true
    },
    selected: {
      type: Object,
      default: null
    }
  },
  data: function () {
    return {
      selectedItem: null
    }
  },
  methods: {
    selectItem: function (e) {
      this.$emit('select', this.selectedItem)
    }
  }
}
</script>

<style type="text/css">
  
</style>
