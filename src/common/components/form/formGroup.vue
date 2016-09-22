<template>
  <div :class=" isValid ? 'has-error' : ''" class="form-group">
    <label  class="control-label" for="phone">{{ label }}</label>
    <slot></slot>
     <span v-show="isValid" class="error help-block">{{ invalidMessage }}</span>
  </div>
</template>

<script type="text/javascript">
  export default {
    props: [
      {
        name: 'label',
        type: String,
        default: undefined
      },
      'errorMessage',
      'invalidMessage'
    ]
  }
</script>