<template>
<div>
  <div class="form-group">
    <button type="submit" class="btn btn-default btn-success" @click.prevent="submitClicked">{{ submitText }}</button>
    <button v-if="showReset" class="btn btn-default btn-warning" @click="resetClicked">{{ resetText }}</button>
    <button v-if="showBack" class="btn btn-default btn-danger" @click.prevent="backClicked">{{ backText }}</button>
    <slot></slot>
  </div>
</div>
</template>

<script type="text/javascript">
  export default {
    name: 'MymtgAction',
    props: {
      submitText: {
        type: String,
        default: 'Submit'
      },
      backText: {
        type: String,
        default: 'Get back'
      },
      resetText: {
        type: String,
        default: 'Reset'
      },
      reset: {
        type: String,
        default: 'on'
      },
      back: {
        type: String,
        default: 'on'
      }
    },
    data: function () {
      return {
        // placeholder: 'TESTO'
      }
    },
    computed: {
      showReset: function () {
        return this.reset === 'on' || false
      },
      showBack: function () {
        return this.back === 'on' || false
      }
    },
    methods: {
      submitClicked: function () {
        this.$emit('submitted')
      },
      backClicked: function () {
        this.$emit('backed')
      },
      resetClicked: function () {
        this.$emit('reseted')
      }
    },
    created: function () {
    }
  }
</script>