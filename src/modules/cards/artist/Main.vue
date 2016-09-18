<template>
  <div>
    <h2>Artists</h2>
  </div>
  <button class="btn btn-default" @click="status = 'index'" v-if="status !== 'index'" >show all</button>
  <div v-if="status === 'index'">
      <input type="text" v-model="artistQuery">
     <table class="table table-bordered">
  <thead>
    <th>Id</th>
    <th>Name</th>
    <th>Created at</th>
    <th>Updated at</th>
    <th colspan="2"><a class="btn btn-default btn-block" @click="newArtist" >New Artist</a></th>
  </thead>
  <tbody>
    <tr  v-for="artist in artists | filterBy artistQuery">
      <td>{{ artist.id }}</td>
      <td>{{ artist.name }}</td>
      <td>{{ artist.created_at }}</td>
      <td>{{ artist.updated_at }}</td>
      <td><a @click="editArtist(artist)" class="btn btn-warning btn-block">Edit</a></td>
      <td><a class="btn btn-danger btn-block">Remove</a></td>
    </tr>
  </tbody>
  </table>
  </div>
 
  <create-artist @finished="actionFinished" v-if="status === 'create'"></create-artist>
</template>


<script>
  import JsonRequest from 'src/common/api/JsonRequest'
  import createArtist from './CreateArtist'
  export default {
    ready: function () {
      this.jsonRequest = new JsonRequest()
      this.reloadArtist()
    },
    components: {
      createArtist
    },
    data () {
      return {
        artists: [],
        status: 'index',
        artistQuery: ''
      }
    },
    methods: {
      editArtist: function (artist) {
        console.log(artist)
      },
      newArtist: function () {
        this.status = 'create'
      },
      actionFinished: function () {
        this.status = 'index'
        this.reloadArtist()
      },
      reloadArtist: function () {
        this.jsonRequest.get('artist').then((response) => {
          this.$data.artists = response.data
        })
      }
    }
  }
</script>



<style>
  
</style>