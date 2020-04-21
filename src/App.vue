<template>
  <div id="app">
    <div :is="component"></div>
  </div>
</template>

<script>
import "@/assets/main.scss"

import { mapState } from "vuex"
import DefaultLayout from "@/layouts/DefaultLayout"

export default {
  components: {
    DefaultLayout
  },
  computed: {
    ...mapState("LayoutModule", {
      component: state => state.layout
    })
  }
}
</script>


<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
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
