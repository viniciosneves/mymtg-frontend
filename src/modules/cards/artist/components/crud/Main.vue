<template>
  <div>
    <h1>Artists</h1>
  <mymtg-grid :data="artists"
              :columns="columns"
              @selectedrow="selected"
              @dbclickrow="editArtist">
  <div slot="actions" >
    <button @click="newArtist"  class="btn btn-default btn-lg">Create</button>
    <button @click="editArtist" :class="selectedRow === null ? 'disabled' : ''" class="btn btn-default btn-lg">Update</button>
    <button @click="deleteArtist" :class="selectedRow === null ? 'disabled' : ''" class="btn btn-default btn-lg">Delete</button>
  </div>
      <pagination slot="pagination" @change="changePage" :model="paginationModel" ></pagination>
</mymtg-grid>
  </div>

</template>


<script>
  import MymtgGrid from 'src/common/components/grid/MymtgGrid'
  import ArtistModel from 'src/modules/cards/artist/models/Artist'
  import pagination from 'src/common/components/list/pagination/Pagination'
  import PaginationModel from 'src/common/components/list/pagination/Model'
  import { toast } from 'src/common/components/notification/toast/Toast'
  export default {
    mounted: function () {
      this.artistModel = new ArtistModel()
      this.loadArtists()
    },
    components: {
      pagination,
      MymtgGrid
    },
    data () {
      return {
        artists: [],
        paginationModel: new PaginationModel(),
        artistQuery: '',
        selectedRow: null
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
      changePage: function (page) {
        this.loadArtists(page)
      },
      selected: function (row) {
        this.selectedRow = row
      },
      editArtist: function () {
        this.$router.push({ name: 'updateArtist', params: { id: this.selectedRow.id } })
      },
      newArtist: function () {
        this.$router.push({ name: 'createArtist' })
      },
      loadArtists: function (page = this.paginationModel.currentPage) {
        this.artistModel.all({ page, per_page: 10, query: this.artistQuery }).then((response) => {
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