<template>
<div class="actions-container">
  <span class="action-item">
    <slot  name="before-actions" ></slot>
  </span>

  <button @click="create" class="action-item btn btn-default btn-lg">
    Create
  </button>

  <button @click="update" class="action-item btn btn-default btn-lg" :class="selectedItem === null ? 'disabled' : ''" >
    Update
  </button>

  <button @click="remove" class="action-item btn btn-default btn-lg" :class="selectedItem === null ? 'disabled' : ''">
    Remove
  </button>

  <span class="action-item">
    <slot name="after-actions" ></slot>
  </span>

</div>
</template>


<script type="text/javascript">
  export default {
    name: 'MymtgCrudActions',
    props: {
      selectedItem: {
        default: null,
        required: true
      }
    },
    methods: {
      create () {
        this.$emit('create')
      },

      update () {
        this.$emit('update', this.selectedItem)
      },

      remove () {
        this.$emit('remove', this.selectedItem)
      }

    }
  }
</script>


<style type="text/css" scoped>
.actions-container {
  display: flex;
}
.action-item {
  margin-right: 10px;
}
</style>