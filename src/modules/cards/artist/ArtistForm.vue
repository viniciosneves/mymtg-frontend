<template>
<h2>{{ updating ? 'Update' : 'Create New' }} Artist</h2>
<validator name="artistValidation">
  <form>
   <div v-show="updating" class="form-group">
    <label  class="control-label" for="id">ID:</label>
    <input class="form-control input-sm" disabled="disabled" v-model="id"/>
  </div>
  <div :class=" dirty ? 'has-error' : ''" class="form-group">
    <label  class="control-label" for="name">Name:</label>
    <input class="form-control input-lg"  v-validate:name="['required']" v-model="name" class="form-control"  placeholder="Name">
    <span class="error help-block" v-if="dirty">Required Field</span>
  </div>
  <div class="form-group">
    <label  class="control-label" for="phone">Phone:</label>
    <input class="form-control input-lg" v-mask.clear="phone" v-model="phone" class="form-control"  placeholder="Phone">
  </div>
  <button type="submit" class="btn btn-default" @click.prevent="submit">{{ updating ? 'Update' : 'Create' }}</button>
  <button type="submit" class="btn btn-default" @click.prevent="back">Back to List</button>
</form>
</validator>
<!-- <pre>{{ $data | json}}</pre> -->
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
      id: undefined,
      name: '',
      phone: ''
    }
  },

  computed: {
    updating: function () {
      if (this.artist && this.artist.id) {
        return true
      }
      return false
    },
    dirty: function () {
      return this.$artistValidation.name.required && this.$artistValidation.name.dirty
    }
  },

  methods: {

    submit: function (e) {
      if (this.$artistValidation.valid) {
        console.log('artist submited')
        this.$dispatch('submited', this.$data)
      } else {
        this.$artistValidation.name.dirty = true
      }
    },
    back: function (e) {
      this.$dispatch('back', this.$data)
    }
  },
  ready: function () {
    this.apiModel = new JsonRequest()
    if (this.updating) {
      this.apiModel.get(`artist/${this.artist.id}`).then((response) => {
        this.$data = response.data
      })
    }
  }

}
</script>

<style></style>
