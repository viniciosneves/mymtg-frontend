<template>
  <div >
    <h1>Edition</h1>
      <edition-filter  @search="search" @clean="search" class="col-md-2"></edition-filter>
  <mymtg-grid class="col-md-10" :data="items"
              :columns="columns"
              @selectedrow="selected">

  <mymtg-crud-actions slot="actions"
                      :selectedItem="selectedRow"
                      @create="create"
                      @update="edit"
                      @remove="remove">
  </mymtg-crud-actions>
      <pagination slot="pagination" @change="changePage" :model="paginationModel" ></pagination>
</mymtg-grid>
  </div>
</template>


<script>
  import EditionFilter from './Filter'
  import MymtgGrid from 'src/common/components/list/grid/MymtgGrid'
  import MymtgCrudActions from 'src/common/components/list/actions/MymtgCrudActions'
  import EditionModel from 'src/modules/cards/edition/models/Edition'
  import pagination from 'src/common/components/list/pagination/Pagination'
  import PaginationModel from 'src/common/components/list/pagination/Model'
  import { toast } from 'src/common/components/notification/toast/Toast'
  export default {
    name: 'MymtgEditionMain',
    mounted: function () {
      this.model = new EditionModel()
      this.load()
    },
    components: {
      pagination,
      MymtgGrid,
      MymtgCrudActions,
      EditionFilter
    },
    data () {
      return {
        items: [],
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
          { index: 'realese_date', text: 'Release Date' },
          { index: 'initials', text: 'Initials' },
          { index: 'cards_amount', text: 'Amount of Cards' },
          { index: 'block.name', text: 'Block' },
          { index: 'created_at', text: 'Creation date' },
          { index: 'updated_at', text: 'Last Updated' }
        ]
      }
    },
    methods: {
      search: function (filter) {
        this.filter = filter
        this.paginationModel.currentPage = 1
        this.selectedRow = null
        this.load()
      },
      changePage: function (page) {
        this.paginationModel.currentPage = page
        this.load()
      },
      selected: function (row) {
        this.selectedRow = row
      },
      edit: function () {
        this.$router.push({ name: 'cards.edition.update', params: { id: this.selectedRow.id } })
      },
      create: function () {
        this.$router.push({ name: 'cards.edition.create' })
      },
      load: function () {
        let page = this.paginationModel.currentPage
        this.model.paginate({ page, per_page: 10, ...this.filter }).then((response) => {
          this.items = response.data.data
          this.paginationModel.update(response.data)
        })
      },
      remove: function () {
        this.model.delete(this.selectedRow.id).then(this.deleted)
      },
      deleted: function (response) {
        toast.success('Edition removed!')
        this.selectedRow = null
        this.load()
      }
    }
  }
</script>

<style>
  
</style>