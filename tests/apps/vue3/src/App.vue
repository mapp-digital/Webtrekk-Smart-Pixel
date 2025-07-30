<template>
  <div>
    <div class="sticky">
    <Header />
  </div>
  <div class="content">
    <router-view />
  </div>
  <Snackbar />
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

h2 {
  font-size: x-large !important;
  font-weight: bold !important;
}
</style>

<script lang="ts">
import { defineComponent } from "vue";
import Header from "/src/components/Header.vue";
import Snackbar from "/src/components/Snackbar.vue";
import store from './store'

export default defineComponent({
  name: "App",
  props: {
    msg: {
      type: String,
      required: false,
    },
  },
  components: {
    Header,
    Snackbar,
  },
  setup() {
    store.dispatch("getUserData");
  },
});
</script>
