<template>
  <v-toolbar color="grey" dark>
    <v-btn text @click="home" class="py-5 text-h6"> בית </v-btn>
    <v-btn text @click="match" class="py-5 text-h6"> המאצ' שלי </v-btn>
    <v-btn text @click="info" class="py-5 text-h6"> קצת עלינו </v-btn>
    <v-btn text @click="logoff" class="py-5 text-h6"> התנתק </v-btn>

    <v-spacer></v-spacer>
    <v-toolbar-title class="mt-1 pt-0 text-h6 font-weight-bold">
      RWF - Better Together
    </v-toolbar-title>
  </v-toolbar>
</template>

<script>
export default {
  methods: {
    home() {
      this.$router.push({ path: "homepage" });
    },
    match() {
      this.$router.push({ path: "match" });
    },
    info() {
      this.$router.push({ path: "info" });
    },
    logoff() {
      this.$router.push({ path: "login" });
    },
  },
};
</script>

<style lang="scss"></style>
