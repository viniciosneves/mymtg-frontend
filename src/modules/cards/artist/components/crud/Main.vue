<template>
  <div >
    <h1>Artists</h1>
   <!--  <div>  <form>
    <div class="col-md-6">
  <div class="form-group">
    <label for="exampleInputEmail1">Name</label>
    <input type="email" class="form-control" id="exampleInputEmail1" placeholder="Email">
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
  </div>
  </div>
  <div class="col-md-6">
        <div class="form-group">
      <label for="exampleInputEmail1">Email address</label>
      <input type="email" class="form-control" id="exampleInputEmail1" placeholder="Email">
    </div>
    <div class="form-group">
      <label for="exampleInputPassword1">Password</label>
      <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
    </div>
  </div>
  <div class="col-md12">
    <button class="btn btn-default">Search</button>
  </div>
</form></div> -->
  <mymtg-grid :data="artists"
              :columns="columns"
              @selectedrow="selected"
              @dbclickrow="editArtist">

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
      MymtgCrudActions
    },
    data () {
      return {
        artists: [],
        paginationModel: new PaginationModel(),
        artistQuery: '',
        selectedRow: null,
        showModal: false
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