<template>
  <form>
  <div class="form-group">
    <label for="name">Name:</label>
    <input v-model="name" class="form-control"  placeholder="Name">
  </div>
  <button v-show="updating" type="submit" class="btn btn-default" @click.prevent="update">Update</button>
  <button v-else type="submit" class="btn btn-default" @click.prevent="create" >create</button>
</form>
</template>

<script>
import JsonRequest from 'src/common/api/JsonRequest'
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
        this.$dispatch('created', response)
      })
    },
    update: function (e) {
      this.apiModel.put(`artist/${this.entityId}`, this.$data).then((response) => {
        this.$data = response.data
        this.$dispatch('updated', response)
      })
    }
  },
  ready: function () {
    this.apiModel = new JsonRequest()
    if (this.updating) {
      this.apiModel.get(`artist/${this.entityId}`).then((response) => {
        this.$data = response.data
      })
    }
  }

}
</script>

<style></style>
