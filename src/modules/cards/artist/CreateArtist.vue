<template>
  <h1>New Artist</h1>
  <artistform @finish="artistCreated" @finish-error="onError"></artistform>
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
    artistCreated: function (response) {
      toast.success('Artist created!')
      this.$dispatch('finished')
    },
    onError: function (response) {
      console.log(response.response)
      toast.error(response.response.errors.title, response.response.errors.exception_name)
    }
  }
}
</script>


<style>
  
</style>