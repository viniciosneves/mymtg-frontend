<template>
  <h1>Sorry, the page you are trying to access do not exists</h1>
  <br>
  <button class="btn btn-info" @click="routeToMain" >Back to Main</button>
</template>




<script type="text/javascript">
  export default {
    created: function () {

    },
    methods: {
      routeToMain: function () {
        this.$route.router.go({ name: 'main' })
      }
    }
  }
</script>




<style type="text/css">

</style>