<template>
  <h1>Update Artist</h1>
  <artistform @finish="artistUpdated"></artistform>
</template>

<script>
import artistform from './Form'
import { toast } from 'src/common/components/notification/toast/Toast'
export default {
  ready: function () {
  },
  components: {
    artistform
  },
  methods: {
    artistUpdated: function (response) {
      toast.success('Artist updated!')
      this.$dispatch('finished')
    }
  }
}
</script>


<style>
  
</style>