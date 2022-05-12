<template>
  <v-app id="app">
    <router-view />
  </v-app>
</template>

<script>
export default {
  created () {
    this.$router.push({ path: 'login' });
  },
  name: 'App'
}
</script>

<style lang="scss">
html { // vuetify reset
  overflow-y: auto !important;
  overflow-x: auto !important;
}
#app {
  background-color: #d1cdf19a}
</style>
