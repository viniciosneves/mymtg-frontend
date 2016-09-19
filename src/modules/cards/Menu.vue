<template>
  <div class='menu'>
    <button class="btn btn-lg btn-primary" v-link="{ path: '/cards/artist' }">Artists</button>
    <button class="btn btn-lg btn-primary" v-link="{ path: '/cards/block' }">Block</button>
    <button class="btn btn-lg btn-primary" v-link="{ path: '/cards/card' }">Card</button>
    <button class="btn btn-lg btn-primary" v-link="{ path: '/cards/color' }">Color</button>
    <button class="btn btn-lg btn-primary" v-link="{ path: '/cards/edition' }">Edition</button>
    <button class="btn btn-lg btn-primary" v-link="{ path: '/cards/rarety' }">Rarety</button>
    <button class="btn btn-lg btn-primary" v-link="{ path: '/cards/type' }">Type</button>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.menu .btn {
  padding: 60px;
  margin-left: 30px;
  margin-bottom:10px;
  width: 250px;
  float:left;
}
</style>