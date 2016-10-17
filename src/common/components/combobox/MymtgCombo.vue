<template>
<div>
  <select v-model="selectedItem" @change="selectItem" class="form-control mymtg-select">
    <option v-if="showDefaultOption" :value="defaultValue">{{ defaultText }}</option>
    <option v-for="entry in data" :value="entry.value"  >{{ entry.text }}</option>
  </select>  
</div>
</template>


<script type="text/javascript">
export default {
  name: 'MymtgCombo',
  props: {
    data: {
      required: true
    },
    selected: {},
    defaultValue: {
      default: 0
    },
    defaultText: {
      default: 'Select'
    },
    showDefaultOption: {
      default: true
    }
  },
  data: function () {
    return {
    }
  },
  computed: {
    selectedItem: function () {
      return this.selected
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
