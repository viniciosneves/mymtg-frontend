<template>
  <form>
  <div class="form-group">
    <label for="name">Name:</label>
    <input value="{{ name }}" type="name" class="form-control" id="name" placeholder="Name">
  </div>
  <button type="submit" class="btn btn-default">Create</button>
</form>
</template>

<script>
export default {
  props: [
    {
      name: 'id'
    }
  ],

  data: function () {
    return {
      name: ''
    }
  },
  ready: function () {
  }

}
</script>

<style></style>
