<template>
<div class="pagination-container" >
  <ul class="pagination-item pagination">
    <li><a @click="changePage(model.firstPage)">First</a></li>
    <li :class="isFirstPage ? 'disabled' : ''" ><a @click="changePage(model.previusPage)">Previus</a></li>
    <li :class="isLastPage ? 'disabled' : ''"><a @click="changePage(model.nextPage)">Next</a></li>
    <li><a @click="changePage(model.lastPage)">Last</a></li>
  </ul>
  <span  class="pagination-item pagination-info">
    <span>Page </span>
    <span class="form-inline">
      <input @keyup.enter="changePage(currentPage)"
           class="input-page form-control input-sm"
           type="number" v-model="currentPage" />
    </span>
    <span> of </span> 
    <span> {{ model.lastPage }} </span>
  </span>
 </div>
</template>


<script type="text/javascript">
  export default {
    props: {
      'model': {
        required: true
      }
    },
    data: function () {
      return {
        currentPage: ''
      }
    },
    methods: {
      changePage: function (page) {
        this.currentPage = page
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
    },
    watch: {
    },
    created: function () {
      this.currentPage = this.model.currentPage
    }
  }
</script>


<style type="text/css" scoped>
.pagination li > a {
  cursor: pointer;
}

.pagination-container {
  display: -webkit-flex;
  display: inline-flex;
}

.pagination-container > .pagination-item {
  margin-right:10px;
  text-align: center;
  padding-left: 0;
  margin: 20px 5px;
}

.pagination-info {

}

.input-page {
  width: 60px;

}
input[type=number]::-webkit-inner-spin-button, 
input[type=number]::-webkit-outer-spin-button { 
  -webkit-appearance: none; 
  margin: 0; 
}
</style>