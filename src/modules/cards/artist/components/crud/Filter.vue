<template>
<div>  
  <form @submit.prevent="search">
    <mymtg-field label="Name">
      <input @keyup.enter="search" class="form-control" v-model="filterModel.name" placeholder="Name">
    </mymtg-field>
    <div class="filter-actions pull-right">
      <button class="btn btn-default" @click.prevent="search">Search</button>
      <button class="btn btn-info" @click.prevent="clean">Clean</button>
    </div>
  </form>
</div>
</template>

<script type="text/javascript">
  import MymtgField from 'src/common/components/form/MymtgField'
  export default {
    data: function () {
      return {
        filterModel: {
          name: ''
        }
      }
    },
    components: {
      MymtgField
    },
    methods: {
      search: function () {
        this.$emit('search', this.$data.filterModel)
      },
      clean: function () {
        this.$data.filterModel = {}
        this.$emit('search', this.$data.filterModel)
      }
    }
  }
</script>


<style type="text/css" scoped>

.filter-actions {
  margin-top: 10px;
}
</style>
