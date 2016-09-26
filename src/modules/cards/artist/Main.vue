<template>
  <div>
    <h1>Artists</h1>
  </div>
  <div>
<table class="table table-bordered">
  <thead>
    <th>Id</th>
    <th>Name</th>
    <th>Created at</th>
    <th>Updated at</th>
    <th colspan="2"><a class="btn btn-default btn-block" v-link="{ name: 'createArtist' }" >New Artist</a></th>
  </thead>
  <tbody>
    <tr @dblclick="$route.router.go({ name: 'updateArtist', params: {id: artist.id }})" v-for="artist in artists">
      <td>{{ artist.id }}</td>
      <td>{{ artist.name }}</td>
      <td>{{ artist.created_at }}</td>
      <td>{{ artist.updated_at }}</td>
      <td><a  v-link="{ name: 'updateArtist', params: { id: artist.id }}" class="btn btn-warning btn-block">edit</a></td>
      <td><a @click="deleteArtist(artist)" class="btn btn-danger btn-block">Remove</a></td>
    </tr>
  </tbody>
  </table>
  <pagination @change="changePage" :model="paginationModel"></pagination>
  </div>
  <!-- <pre>{{ $data | json}}</pre> -->
</template>


<script>
  import JsonRequest from 'src/common/api/JsonRequest'
  import pagination from 'src/common/components/list/pagination/Pagination'
  import PaginationModel from 'src/common/components/list/pagination/Model'
  import { toast } from 'src/common/components/notification/toast/Toast'
  export default {
    created: function () {
      this.apiModel = new JsonRequest()
      this.loadArtists()
    },
    components: {
      pagination
    },
    data () {
      return {
        artists: [],
        paginationModel: new PaginationModel()
      }
    },
    methods: {
      changePage: function (page) {
        this.loadArtists(page)
      },
      loadArtists: function (page = this.paginationModel.currentPage) {
        this.apiModel.get('artist', { page, per_page: 5 }).then((response) => {
          this.$data.artists = response.data.data
          this.$data.paginationModel.update(response.data)
        })
      },
      deleteArtist: function (artist) {
        this.apiModel.delete(`artist/${artist.id}`, artist).then(this.deleted, this.fail)
      },
      deleted: function (response) {
        toast.success('Artist removed!')
        this.loadArtists()
      },
      fail: function (response) {
        toast.error(response.responseJSON.errors.title, response.responseJSON.errors.exception_name)
      }
    }
  }
</script>



<style>
  
</style>