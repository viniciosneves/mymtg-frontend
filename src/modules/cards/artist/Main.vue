<template>
  <div>
    <h1>Artists</h1>
  </div>
  <button class="btn btn-default" @click="state = 'index'" v-if="state !== 'index'" >show all</button>
  <div v-if="state === 'index'">
      <!-- <input type="text" v-model="artistQuery"> -->
     <table class="table table-bordered">
  <thead>
    <th>Id</th>
    <th>Name</th>
    <th>Created at</th>
    <th>Updated at</th>
    <th colspan="2"><a class="btn btn-default btn-block" @click="newArtist" >New Artist</a></th>
  </thead>
  <tbody>
    <tr @dblclick="updateArtist(artist)" v-for="artist in artists | filterBy artistQuery">
      <td>{{ artist.id }}</td>
      <td>{{ artist.name }}</td>
      <td>{{ artist.created_at }}</td>
      <td>{{ artist.updated_at }}</td>
      <td><a @click="updateArtist(artist)" class="btn btn-warning btn-block">Edit</a></td>
      <td><a @click="deleteArtist(artist)" class="btn btn-danger btn-block">Remove</a></td>
    </tr>
  </tbody>
  </table>
  </div>
  <artist-form :artist="selectedArtist"  v-if="state !== 'index'" @submited="onArtistFormSubmited"></artist-form>
  <!-- <pre>{{ $data | json}}</pre> -->
</template>


<script>
  import JsonRequest from 'src/common/api/JsonRequest'
  import ArtistForm from './ArtistForm'
  import { toast } from 'src/common/components/notification/toast/Toast'
  export default {
    ready: function () {
      this.apiModel = new JsonRequest()
      this.loadArtists()
    },
    components: {
      ArtistForm
    },
    events: {
      'appsearch': function (query) {
        this.state = 'index'
        this.artistQuery = query
      }
    },
    data () {
      return {
        artists: [],
        state: 'index',
        selectedArtist: null,
        artistQuery: ''
      }
    },
    methods: {
      updateArtist: function (artist) {
        this.selectedArtist = artist
        this.state = 'update'
      },

      newArtist: function () {
        this.selectedArtist = null
        this.state = 'create'
      },

      actionFinished: function () {
        this.state = 'index'
        this.loadArtists()
      },

      onArtistFormSubmited: function (artist) {
        // updating
        if (artist && artist.id) {
          console.log('updating artist', artist)
          this.update(artist)
        } else if (artist) {
          console.log('creating artist', artist)
          this.create(artist)
        }
      },

      loadArtists: function () {
        this.apiModel.get('artist').then((response) => {
          this.$data.artists = response.data
          this.state = 'index'
        })
      },

      create: function (artist) {
        this.apiModel.post('artist', artist).then(this.created, this.fail)
      },

      update: function (artist) {
        this.apiModel.put(`artist/${artist.id}`, artist).then(this.updated, this.fail)
      },

      deleteArtist: function (artist) {
        this.apiModel.delete(`artist/${artist.id}`, artist).then(this.deleted, this.fail)
      },

      created: function (response) {
        toast.success('Artist created!')
        this.loadArtists()
      },

      updated: function (response) {
        toast.success('Artist updated!')
        this.loadArtists()
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