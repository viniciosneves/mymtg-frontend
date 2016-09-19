<template>
<validator name="artistValidation">
  <form>
  <div :class=" dirty ? 'has-error' : ''" class="form-group">
    <label  class="control-label" for="name">Name:</label>
    <input class="form-control input-lg"  v-validate:name="['required']" v-model="name" class="form-control"  placeholder="Name">
    <span class="error" v-if="dirty">Required Field</span>
  </div>
  <button type="submit" class="btn btn-default" @click.prevent="submit">{{ updating ? 'Update' : 'Create' }}</button>
</form>
</validator>
 <pre>{{ $artistValidation | json }}</pre>
</template>

<script>
import JsonRequest from 'src/common/api/JsonRequest'
export default {
  props: [
    {
      name: 'artist'
    }
  ],

  data: function () {
    return {
      name: ''
    }
  },

  computed: {
    updating: function () {
      if (this.artist) {
        return true
      }
      return false
    },
    dirty: function () {
      return this.$artistValidation.name.required && this.$artistValidation.name.dirty
    }
  },

  methods: {
    create: function (e) {
      if (!this.$artistValidation.valid) {

      }
      this.apiModel.post('artist', this.$data).then(this.finish, this.fail)
    },
    update: function (e) {
      this.apiModel.put(`artist/${this.entityId}`, this.$data).then(this.finish, this.fail)
    },
    finish: function (response) {
      this.$data = response.data
      this.$dispatch('finish', { response })
    },
    fail: function (response) {
      this.$dispatch('finish-error', { response: response.responseJSON })
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
