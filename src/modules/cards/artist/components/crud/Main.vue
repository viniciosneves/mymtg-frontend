<template>
  <div >
    <h1>Artists</h1>
      <artist-filter  @search="searchArtist" @clean="searchArtist" class="col-md-2"></artist-filter>
  <mymtg-grid class="col-md-10" :data="artists"
              :columns="columns"
              @selectedrow="selected">

  <mymtg-crud-actions slot="actions"
                      :selectedItem="selectedRow"
                      @create="newArtist"
                      @update="editArtist"
                      @remove="deleteArtist">
  </mymtg-crud-actions>
      <pagination slot="pagination" @change="changePage" :model="paginationModel" ></pagination>
</mymtg-grid>
  </div>
</template>


<script>
  import ArtistFilter from './Filter'
  import MymtgGrid from 'src/common/components/list/grid/MymtgGrid'
  import MymtgCrudActions from 'src/common/components/list/actions/MymtgCrudActions'
  import ArtistModel from 'src/modules/cards/artist/models/Artist'
  import pagination from 'src/common/components/list/pagination/Pagination'
  import PaginationModel from 'src/common/components/list/pagination/Model'
  import { toast } from 'src/common/components/notification/toast/Toast'
  export default {
    name: 'MymtgArtistMain',
    mounted: function () {
      this.artistModel = new ArtistModel()
      this.loadArtists()
    },
    components: {
      pagination,
      MymtgGrid,
      MymtgCrudActions,
      ArtistFilter
    },
    data () {
      return {
        artists: [],
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
      searchArtist: function (filter) {
        this.filter = filter
        this.paginationModel.currentPage = 1
        this.loadArtists()
      },
      changePage: function (page) {
        this.paginationModel.currentPage = page
        this.loadArtists()
      },
      selected: function (row) {
        this.selectedRow = row
      },
      editArtist: function () {
        this.$router.push({ name: 'cards.artist.update', params: { id: this.selectedRow.id } })
      },
      newArtist: function () {
        this.$router.push({ name: 'cards.artist.create' })
      },
      loadArtists: function () {
        let page = this.paginationModel.currentPage
        this.artistModel.all({ page, per_page: 10, ...this.$data.filter }).then((response) => {
          this.$data.artists = response.data.data
          this.$data.paginationModel.update(response.data)
        })
      },
      deleteArtist: function () {
        this.artistModel.delete(this.selectedRow.id).then(this.deleted)
      },
      deleted: function (response) {
        toast.success('Artist removed!')
        this.loadArtists()
      }
    }
  }
</script>

<style>
  
</style>