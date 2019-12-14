<template>
  <div id="app">
    <explorer></explorer>
  </div>
</template>

<script>

import explorer from './components/explorer/explorer.vue'

import store from './store.js'



export default {
  name: 'app',
  store,
  components: {
    
    explorer
  }
}
</script>

<style>
#app {
  position: relative;
  height: 100vh;
  margin: 0px;
  padding: 0px;
  max-height: 100vh;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  overflow: hidden;
}
html {

  height: 100vh;
   max-height: 100vh;
     margin: 0px;
  padding: 0px;
}
body {
   
  height: 100vh;
  width:  100%;
   max-height: 100vh;
     margin: 0px;
  padding: 0px;

}
</style>
