<template>
  <div>
    <h1>Artists</h1>
  <mymtg-grid :data="artists"
              :columns="columns"
              @selectedrow="selected"
              ></mymtg-grid>

<!-- <table class="table table-bordered">
  <thead>
    <th>Id</th>
    <th>Name</th>
    <th>Created at</th>
    <th>Updated at</th>
    <th colspan="2"><a class="btn btn-default btn-block" v-link="{ name: 'createArtist' }" >New Artist</a></th>
  </thead>
  <tbody>
    <tr @dblclick="$route.router.go({ name: 'updateArtist', params: {id: artist.id }})" v-for="artist in artists | filterBy artistQuery">
      <td>{{ artist.id }}</td>
      <td>{{ artist.name }}</td>
      <td>{{ artist.created_at }}</td>
      <td>{{ artist.updated_at }}</td>
      <td><a  v-link="{ name: 'updateArtist', params: { id: artist.id }}" class="btn btn-warning btn-block">edit</a></td>
      <td><a @click="deleteArtist(artist)" class="btn btn-danger btn-block">Remove</a></td>
    </tr>
  </tbody>
  </table> -->
    <pre>{{ $data.selectedRow | json}}</pre>
  <pagination @change="changePage" :model="paginationModel" ></pagination>
  </div>

</template>


<script>
  import MymtgGrid from 'src/common/components/grid/MymtgGrid'
  import ArtistModel from 'src/modules/cards/artist/models/Artist'
  import pagination from 'src/common/components/list/pagination/Pagination'
  import PaginationModel from 'src/common/components/list/pagination/Model'
  import { toast } from 'src/common/components/notification/toast/Toast'
  export default {
    created: function () {
      this.artistModel = new ArtistModel()
      this.loadArtists()
    },
    events: {
      'appsearch': function (query) {
        console.log('appsearch')
        this.artistQuery = query
        this.loadArtists()
      }
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
          { index: 'id', text: 'ID' },
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
        console.log(row)
        this.selectedRow = row
      },
      loadArtists: function (page = this.paginationModel.currentPage) {
        this.artistModel.all({ page, per_page: 10, query: this.artistQuery }).then((response) => {
          this.$data.artists = response.data.data
          this.$data.paginationModel.update(response.data)
        })
      },
      deleteArtist: function (artist) {
        this.artistModel.delete(artist.id).then(this.deleted)
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