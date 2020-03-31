<template>
  <div id="app">
    <Header />

    <router-view />
  </div>
</template>

<script>
import Header from "./components/layout/Header.vue";
export default {
  name: "App",
  components: {
    Header
  }
};
</script>

<style>
#nav a {
  font-weight: bold;
  color: white;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
