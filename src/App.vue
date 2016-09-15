<template>
  <div id='app'>
  <topbar></topbar>
    <div class="container-fluid">
      <div class="row">
       <sidebar></sidebar>
      </div>
    </div>
    <div class="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
             <!-- use router-view element as route outlet -->
          <div class="conteudo">
              <router-view></router-view>
          </div>
          
          <button @click="showNow" >Show Toast</button>
    </div>
           <vue-toast v-ref:toast></vue-toast>
   </div>

</template>

<script>
import 'vue-toast/dist/vue-toast.min.css'
import topbar from './common/components/topbar'
import sidebar from './common/components/sidebar'
import Vue from 'vue'
import VueToast from 'vue-toast'
import Toaster from './common/components/notification/toast/Toaster'

export default Vue.component('App', {
  ready: function () {
  },
  components: {
    topbar,
    sidebar,
    VueToast
  },
  methods: {
    showNow: function () {
      new Toaster(this).error('AHAHAHA')
    }
  }
})

</script>

<style>

.conteudo {
  margin: 60px;
  /*border: 1px solid black;*/
}

/*
 * Base structure
 */

/* Move down content because we have a fixed navbar that is 50px tall */
body {
  padding-top: 50px;
}


/*
 * Global add-ons
 */

.sub-header {
  padding-bottom: 10px;
  border-bottom: 1px solid #eee;
}

/*
 * Top navigation
 * Hide default border to remove 1px line.
 */
.navbar-fixed-top {
  border: 0;
}
</style>
