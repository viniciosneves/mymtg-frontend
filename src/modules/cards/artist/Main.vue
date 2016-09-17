<template>
  <div>
    <h2>Artists</h2>
  </div>
  <table class="table table-bordered">
  <thead>
    <th>Name</th>
    <th>Created at</th>
    <th>Updated at</th>
    <th colspan="2"><a class="btn btn-default btn-block" v-link="{ path: '/cards/artist/new' }" >New Artist</a></th>
  </thead>
  <tbody>
    <tr>
      <td>Julie</td>
      <td>2015-01-01</td>
      <td>2015-01-01</td>
      <td><a class="btn btn-warning btn-block">Edit</a></td>
      <td><a class="btn btn-danger btn-block">Remove</a></td>
    </tr>
  </tbody>
  </table>
</template>


<script>
  export default {
    data () {
      return {
        date: ''
      }
    }
  }
</script>



<style>
  
</style>