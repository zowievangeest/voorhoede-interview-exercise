<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
import store from "./store";
import { router } from "./bootstrap";

export default {
  name: "App",
  store,
  router,
  metaInfo: {
    title: "Voorhoede Interview Exercise",
    titleTemplate: "%s | door Zowie van Geest",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        name: "description",
        content: "De voorhoede interview exercise made by Zowie van Geest"
      }
    ]
  }
};
</script>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
