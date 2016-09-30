<template>
  <div class='menu'>
    <router-link class="btn btn-lg btn-primary" :to="{ name: 'mainArtist' }">Artists</router-link>
    <router-link class="btn btn-lg btn-primary" :to="{ path: '/cards/block' }">Block</router-link>
    <router-link class="btn btn-lg btn-primary" :to="{ path: '/cards/card' }">Card</router-link>
    <router-link class="btn btn-lg btn-primary" :to="{ path: '/cards/color' }">Color</router-link>
    <router-link class="btn btn-lg btn-primary" :to="{ path: '/cards/edition' }">Edition</router-link>
    <router-link class="btn btn-lg btn-primary" :to="{ path: '/cards/rarety' }">Rarety</router-link>
    <router-link class="btn btn-lg btn-primary" :to="{ path: '/cards/type' }">Type</router-link>
  </div>
</template>

<style>
.menu .btn {
  padding: 60px;
  margin-left: 30px;
  margin-bottom:10px;
  width: 250px;
  float:left;
}
</style>