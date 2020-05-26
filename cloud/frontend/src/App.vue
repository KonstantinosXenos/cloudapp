<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
import store from "./store.js";
export default {
  name: "app",
  store,
  metaInfo: {
    title: "Explorer",
    titleTemplate: "%s - Cloud",
    meta: [
      { "http-equiv": "Content-Type", content: "text/html; charset=utf-8" }
    ]
  }
};
</script>
<style>
#app {
  position: absolute;
  height: 100vh;
  margin: 0px;
  padding: 0px;
  max-height: 100vh;
  width: 100%;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
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
  max-height: 100%;
  margin: 0px;
  padding: 0px;
}
body {
  height: 100vh;
  width: 100vh;
  max-height: 100%;
  margin: 0px;
  padding: 0px;
  overflow: hidden;
}
.flex-column {
  display: flex;
  flex-direction: column;
}
.flex-center {
  display: flex;
  align-items: center;
  justify-content: center;
}
* {
  user-select: none;
}
</style>
