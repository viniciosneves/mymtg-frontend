<template>
<div>  
  <form @submit.prevent="search">

    <mymtg-field label="Name">
      <input v-model="filterModel.name"
             class="form-control"
             placeholder="Name" autofocus />
    </mymtg-field>

    <mymtg-field label="Release Date">
      <input type="date"
             v-model="filterModel.release_date"
             class="form-control"/>
    </mymtg-field>

     <mymtg-field label="Initials">
      <input
             v-model="filterModel.initials"
             class="form-control"
             placeholder="Initials"/>
    </mymtg-field>

    <mymtg-field label="Cards Amount">
      <input
            type="number"
            v-model="filterModel.cards_amount"
            class="form-control"
            placeholder="Cards Amount"/>
    </mymtg-field>

    <mymtg-field label="Block">
      <mymtg-block-combo :selected="filterModel.block_id" @select="selectBlock" ></mymtg-block-combo>
      <!-- select v-model="filterModel.block_id" class="form-control">
        <option value="0" >All</option>
        <option v-for="block in blocks" :value="block.id"  >{{ block.name }}</option>
      </select>   -->
    </mymtg-field>

    <mymtg-filter-actions class="pull-right"
     @search="search" 
     @clean="clean">
    </mymtg-filter-actions>

  </form>
</div>
</template>

<script type="text/javascript">
  import MymtgBlockCombo from 'cards/block/components/combobox/MymtgBlockCombo'
  import MymtgField from 'components/form/MymtgField'
  import MymtgFilterActions from 'components/filter/MymtgFilterActions'
  import BlockModel from 'cards/block/models/BlockService'
  export default {
    name: 'EditionFilter',
    data: function () {
      return {
        blockModel: null,
        blocks: [],
        filterModel: {
          name: null,
          release_date: null,
          initials: null,
          cards_amount: null,
          block_id: 6
        }
      }
    },
    components: {
      MymtgField,
      MymtgFilterActions,
      MymtgBlockCombo
    },
    methods: {
      search: function () {
        this.$emit('search', this.filterModel)
      },
      selectBlock: function (blockId) {
        console.log(blockId)
        this.filterModel.block_id = blockId
      },
      clean: function () {
        this.filterModel = {
          name: null,
          release_date: null,
          initials: null,
          cards_amount: null,
          block_id: 0
        }
        this.$emit('clean', this.filterModel)
      }
    },
    created: function () {
      this.blockModel = new BlockModel()

      this.blockModel.all().then((response) => {
        this.blocks = response.data
      })
    }
  }
</script>


<style type="text/css" scoped>
</style>
