<template>
      <div>  <form>
  <div class="form-group">
    <label>Name</label>
    <input type="text" class="form-control" v-model="filterModel.name"  placeholder="Name">
  </div>
  <!-- <div class="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
  </div>
        <div class="form-group">
      <label for="exampleInputEmail1">Email address</label>
      <input type="email" class="form-control" id="exampleInputEmail1" placeholder="Email">
    </div>
    <div class="form-group">
      <label for="exampleInputPassword1">Password</label>
      <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
    </div> -->
    <button class="btn btn-info" @click.prevent="clean">Clean</button>
    <button class="btn btn-default" @click.prevent="search">Search</button>
</form>
</div>
</template>

<script type="text/javascript">
  export default {
    data: function () {
      return {
        filterModel: {
          name: ''
        }
      }
    },
    methods: {
      search: function () {
        this.$emit('search', this.$data.filterModel)
      },
      clean: function () {
        this.$data.filterModel = {}
        this.$emit('search', this.$data.filterModel)
      }
    }
  }
</script>


<style type="text/css"></style>
