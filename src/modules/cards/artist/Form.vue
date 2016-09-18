<template>
  <form>
  <div class="form-group">
    <label for="name">Name:</label>
    <input value="{{ name }}" type="name" class="form-control" id="name" placeholder="Name">
  </div>
  <button v-show="updating" type="submit" class="btn btn-default" @click.prevent="update">Update</button>
  <button v-else type="submit" class="btn btn-default" @click.prevent="create" >create</button>
</form>
</template>

<script>
import JsonRequest from 'src/common/api/JsonRequest'
import Toaster from 'src/common/components/notification/toast/Toaster'
export default {
  props: [
    {
      name: 'entityId'
    }
  ],

  data: function () {
    return {
      name: ''
    }
  },

  computed: {
    updating: function () {
      console.log(this.entityId)
      if (this.entityId) {
        return true
      }
      return false
    }
  },

  methods: {
    create: function (e) {
      this.apiModel.post('artist', this.$data).then((response) => {
        this.$data = response.data
        new Toaster(this).success('artist created!')
      })
    },
    update: function (e) {
      this.apiModel.put(`artist/${this.entityId}`, this.$data).then((response) => {
        this.$data = response.data
        console.log(this)
        new Toaster(this).success('artist updated!')
      })
    }
  },
  ready: function () {
    this.apiModel = new JsonRequest()
    new Toaster(this).success('artist updated!')
    if (this.updating) {
      this.apiModel.get(`artist/${this.entityId}`).then((response) => {
        this.$data = response.data
      })
    }
  }

}
</script>

<style></style>
