<template>
<h2 v-if="title != ''">{{ title }}</h2>
  <div>
    <form>
      <slot></slot>
      <div>
        <button type="submit" class="btn btn-default" @click.prevent="submit">{{ submitButton }}</button>
        <button class="btn btn-default" @click.prevent="back">{{ backButton }}</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  ready: function () {

  },
  props: [
    {
      name: 'formData'
    },
    {
      name: 'submitButton',
      type: String,
      default: 'Submit'
    },
    {
      name: 'backButton',
      type: String,
      default: 'Back'
    },
    {
      name: 'title',
      type: String
    }
  ],
  data: function () {
    return {
    }
  },
  methods: {

    submit: function (e) {
      this.$emit('submited', this.formData)
    },
    back: function (e) {
      this.$dispatch('back')
    }
  }
}
</script>

<style type="text/css">
  
</style>
