<template>
  <div >
    <h1>Block</h1>
      <block-filter  @search="searchBlock" @clean="searchBlock" class="col-md-2"></block-filter>
  <mymtg-grid class="col-md-10" :data="blocks"
              :columns="columns"
              @selectedrow="selected">

  <mymtg-crud-actions slot="actions"
                      :selectedItem="selectedRow"
                      @create="newBlock"
                      @update="editBlock"
                      @remove="deleteBlock">
  </mymtg-crud-actions>
      <pagination slot="pagination" @change="changePage" :model="paginationModel" ></pagination>
</mymtg-grid>
  </div>
</template>


<script>
  import BlockFilter from './Filter'
  import MymtgGrid from 'src/common/components/list/grid/MymtgGrid'
  import MymtgCrudActions from 'src/common/components/list/actions/MymtgCrudActions'
  import BlockModel from 'src/modules/cards/block/models/Block'
  import pagination from 'src/common/components/list/pagination/Pagination'
  import PaginationModel from 'src/common/components/list/pagination/Model'
  import { toast } from 'src/common/components/notification/toast/Toast'
  export default {
    name: 'MymtgBlockMain',
    mounted: function () {
      this.blockModel = new BlockModel()
      this.loadBlocks()
    },
    components: {
      pagination,
      MymtgGrid,
      MymtgCrudActions,
      BlockFilter
    },
    data () {
      return {
        blocks: [],
        paginationModel: new PaginationModel(),
        selectedRow: null,
        filter: {}
      }
    },
    computed: {
      columns: function () {
        return [
          { index: 'id', text: 'Id', id: true },
          { index: 'name', text: 'Name' },
          { index: 'created_at', text: 'Creation date' },
          { index: 'updated_at', text: 'Last Updated' }
        ]
      }
    },
    methods: {
      searchBlock: function (filter) {
        this.filter = filter
        this.paginationModel.currentPage = 1
        this.selectedRow = null
        this.loadBlocks()
      },
      changePage: function (page) {
        this.paginationModel.currentPage = page
        this.loadBlocks()
      },
      selected: function (row) {
        this.selectedRow = row
      },
      editBlock: function () {
        this.$router.push({ name: 'cards.block.update', params: { id: this.selectedRow.id } })
      },
      newBlock: function () {
        this.$router.push({ name: 'cards.block.create' })
      },
      loadBlocks: function () {
        let page = this.paginationModel.currentPage
        this.blockModel.all({ page, per_page: 10, ...this.filter }).then((response) => {
          this.blocks = response.data.data
          this.paginationModel.update(response.data)
        })
      },
      deleteBlock: function () {
        this.blockModel.delete(this.selectedRow.id).then(this.deleted)
      },
      deleted: function (response) {
        toast.success('Block removed!')
        this.selectedRow = null
        this.loadBlocks()
      }
    }
  }
</script>

<style>
  
</style>