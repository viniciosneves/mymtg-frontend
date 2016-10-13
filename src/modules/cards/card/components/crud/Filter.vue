<template>
<div>  
  <form @submit.prevent="search">

    <mymtg-field label="Name">
      <input v-model="filterModel.name"
             class="form-control"
             placeholder="Name" autofocus />
    </mymtg-field>

    <mymtg-field label="Type">
      
    </mymtg-field>

     <mymtg-field label="Colors">
        
    </mymtg-field>

    <mymtg-field label="Rarety">
     
    </mymtg-field>

    <mymtg-field label="Edition">
     
    </mymtg-field>

    <mymtg-filter-actions class="pull-right"
     @search="search" 
     @clean="clean">
    </mymtg-filter-actions>

  </form>
</div>
</template>

<script type="text/javascript">
  import MymtgField from 'src/common/components/form/MymtgField'
  import MymtgFilterActions from 'src/common/components/filter/MymtgFilterActions'
  import CardFilter from 'src/modules/cards/card/models/CardFilter'
  export default {
    name: 'CardFilter',
    data: function () {
      return {
        filterModel: new CardFilter()
      }
    },
    components: {
      MymtgField,
      MymtgFilterActions
    },
    methods: {
      search: function () {
        this.$emit('search', this.filterModel)
      },
      clean: function () {
        this.filterModel.clean()
        this.$emit('clean', this.filterModel)
      }
    },
    created: function () {
    }
  }
</script>


<style type="text/css" scoped>
</style>
