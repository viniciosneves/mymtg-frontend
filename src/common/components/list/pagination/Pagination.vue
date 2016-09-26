<template>
<div>Page {{ model.currentPage }} of {{ model.lastPage }}</div>
  <ul class="pagination">
    <li><a @click="changePage(model.firstPage)">First</a></li>
    <li  :class="isFirstPage ? 'disabled' : ''" ><a @click="changePage(model.previusPage)">Previus</a></li>
    <li :class="isLastPage ? 'disabled' : ''"><a @click="changePage(model.nextPage)">Next</a></li>
    <li><a @click="changePage(model.lastPage)">Last</a></li>
  </ul>
</template>


<script type="text/javascript">
  export default {
    props: [
      {
        name: 'model',
        required: true
      }
    ],
    methods: {
      changePage: function (page) {
        this.$emit('change', page)
      }
    },
    computed: {
      isFirstPage: function () {
        return this.model.firstPage === this.model.currentPage
      },
      isLastPage: function () {
        return this.model.lastPage === this.model.currentPage
      }
    }
  }
</script>


<style type="text/css">
.pagination li > a {
  cursor: pointer;
}
</style>