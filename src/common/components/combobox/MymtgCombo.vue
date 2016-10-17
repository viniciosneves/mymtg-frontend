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
  created: function () {
    this.selectedItem = this.selected
  },
  props: {
    data: {
      required: true
    },
    selected: {
      default: 0
    },
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
      selectedItem: null
    }
  },
  computed: {
    other: function () {
    }
  },
  methods: {
    selectItem: function (e) {
      console.log(new Date(), 'omanaias')
      this.$emit('select', this.selectedItem)
    }
  },
  watch: {
    selected: function (newVal) {
      console.log(new Date(), 'arroz de omanaias')
      this.selectedItem = newVal
    }
  }
}
</script>

<style type="text/css">
  
</style>
