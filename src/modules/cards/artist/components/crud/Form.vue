<template>
<div>
  <form>
  <h1>{{ title }}</h1>
    <mymtg-field label="ID" v-if="updating">
      <input class="form-control input-sm" disabled="disabled" v-model="artist.id"/>
    </mymtg-field>
    <mymtg-field label="Name">
      <input initial="off" class="form-control input-lg" v-model="artist.name" placeholder="Name">
    </mymtg-field>
    <mymtg-action reset="off" @backed="backed" @submitted="submit"></mymtg-action>
  </form>
</div>

</template>

<script>
import ArtistModel from 'src/modules/cards/artist/models/Artist'
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
      this.$validate(() => {
        if (this.$validation.valid) {
          this.updating ? this.update() : this.create()
        }
      })
    },
    backed: function () {
      this.$route.router.go({ name: 'mainArtist' })
    },
    create: function (artist) {
      this.artistModel.create(this.$data.artist).then(() => {
        toast.success('Artist Created!')
        this.$route.router.go({name: 'mainArtist'})
      })
    },
    update: function (artist) {
      this.artistModel.update(this.artist.id, this.$data.artist).then(() => {
        toast.success('Artist Updated!')
        this.$route.router.go({name: 'mainArtist'})
      })
    }
  },
  created: function () {
    this.artistModel = new ArtistModel()
    if (this.updating) {
      this.artistModel.get(this.$route.params.id).then((response) => {
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
