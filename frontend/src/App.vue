<template>
  <div id="app">

    <router-view/>
  </div>
</template>

<script>
import store from './store.js'
export default {
  name: 'app',
  store,

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
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
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
