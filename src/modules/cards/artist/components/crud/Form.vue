<template>
<validator name="validation">
<form>
<h1>{{ title }}</h1>
  <mymtg-field label="ID" v-if="updating">
    <input class="form-control input-sm" disabled="disabled" v-model="artist.id"/>
  </mymtg-field>
  <mymtg-field label="Name" :validator="$validation.name">
    <input initial="off" class="form-control input-lg"  v-validate:name="['required']" v-model="artist.name" placeholder="Name">
  </mymtg-field>
  <mymtg-action reset="off" @backed="backed" @submitted="submit"></mymtg-action>
</form>
  </validator>
<!-- <pre>{{ $data | json}}</pre> -->
</template>

<script>
import Request from 'src/common/http/Request'
import MymtgField from 'src/common/components/form/MymtgField'
import MymtgAction from 'src/common/components/form/MymtgAction'
import { toast } from 'src/common/components/notification/toast/Toast'
export default {
  props: [
  ],
  components: {
    MymtgField,
    MymtgAction
  },
  validators: {
  },
  data: function () {
    return {
      artist: {
        id: undefined,
        name: ''
      }
    }
  },

  computed: {
    updating: function () {
      if (this.$route.params && this.$route.params.id) {
        return true
      }
      return false
    },
    title: function () {
      return this.updating ? `Updating Artist - ${this.artist.name}` : 'Create Artist'
    }
  },
  events: {
  },
  methods: {
    submit: function (e) {
      this.updating ? this.update() : this.create()
      // this.$validate(() => {
      //   if (this.$validation.valid) {
      //     this.updating ? this.update() : this.create()
      //   }
      // })
    },
    backed: function () {
      this.$route.router.go({ name: 'mainArtist' })
    },
    create: function (artist) {
      Request.getInstance().post('artist', this.$data.artist).then(() => {
        toast.success('Artist Created!')
        this.$route.router.go({name: 'mainArtist'})
      }, this.fail)
    },
    update: function (artist) {
      Request.getInstance().put(`artist/${this.artist.id}`, this.$data.artist).then(() => {
        toast.success('Artist Updated!')
        this.$route.router.go({name: 'mainArtist'})
      }, this.fail)
    },
    fail: (error) => {
      console.log(error)
      // toast.warning('DEU ALGUMA MERDA', 'DEU SIM')
    }
  },
  mounted: function () {
    if (this.updating) {
      Request.getInstance().get(`artist/${this.$route.params.id}`).then((response) => {
        this.$data.artist = response.data
      }, (response) => {
        this.fail(response)
        this.$route.router.go({name: 'mainArtist'})
      })
    }
  }

}
</script>

<style></style>
