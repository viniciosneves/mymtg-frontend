<template>
  <button class="btn btn-info" @click="getBack">{{ buttonName }}</button>
</template>

<script>
  export default {

    props: {
      buttonName: {
        type: String,
        default: 'get back!'
      },
      where: {
        type: String
      }
    },

    computed: {
      route: function () {
        return this.where ? this.where : { name: 'main' }
      }
    },

    methods: {
      getBack: function () {
        this.$route.router.go(this.route)
      }
    }

  }
</script>

<style>
  
</style>