<template>
<div>
  <select class="mymtg-select">
    <option v-for="entry in data" :value="entry.id"  >{{ entry.name }}</option>
  </select>  
</div>
</template>


<script type="text/javascript">
export default {
  name: 'MymtgSelect',
  props: {
    data: {
      required: true
    }
  }
}
</script>

<style type="text/css">
  
</style>
