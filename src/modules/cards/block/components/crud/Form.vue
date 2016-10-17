<template>
<div>
  <form>
  <h1>{{ title }}</h1>
    <mymtg-field label="ID" v-if="updating">
      <input class="form-control input-sm" disabled="disabled" v-model="block.id"/>
    </mymtg-field>
    <mymtg-field label="Name">
      <input initial="off" class="form-control input-lg" v-model="block.name" placeholder="Name">
    </mymtg-field>
    <mymtg-action reset="off" @backed="goBack" @submitted="submit"></mymtg-action>
  </form>
</div>

</template>

<script>
import BlockModel from 'cards/block/models/BlockService'
import MymtgField from 'components/form/MymtgField'
import MymtgAction from 'components/form/MymtgAction'
import { toast } from 'components/notification/toast/Toast'
export default {
  name: 'MymtgBlockForm',
  props: {

  },
  components: {
    MymtgField,
    MymtgAction
  },
  data: function () {
    return {
      block: {
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
      return this.updating ? `Updating Block - ${this.block.name}` : 'Create Block'
    }
  },
  events: {
  },
  methods: {
    submit: function (e) {
      /* this.$validate(() => {
        if (this.$validation.valid) { */
      this.updating ? this.update() : this.create()
        // }
      // })
    },
    goBack: function () {
      this.$router.push({name: 'cards.block'})
    },
    create: function (block) {
      this.blockModel.create(this.block).then(() => {
        toast.success('Block Created!')
        this.goBack()
      })
    },
    update: function (block) {
      this.blockModel.update(this.block.id, this.block).then(() => {
        toast.success('Block Updated!')
        this.goBack()
      })
    }
  },
  created: function () {
    this.blockModel = new BlockModel()
    if (this.updating) {
      this.blockModel.get(this.$route.params.id).then((response) => {
        this.block = response.data
      }, (response) => {
        this.goBack()
      })
    }
  }

}
</script>

<style></style>
