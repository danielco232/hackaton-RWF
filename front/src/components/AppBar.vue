<template>
  <v-toolbar color="#757194" dark>
    <v-btn text @click="home" class="py-5 "> בית </v-btn>
    <v-btn text @click="match" class="py-5"> המאצ' שלי </v-btn>
    <v-btn text @click="info" class="py-5 "> קצת עלינו </v-btn>
    <v-btn text @click="logoff" class="py-5 "> התנתק </v-btn>

    <v-spacer></v-spacer>
    <v-img max-width="230" max-height="50" src="../assets/s-logo.png"></v-img>
    <!-- <v-toolbar-title class="mt-1 pt-0  font-weight-">
      RWF - Better Together
    </v-toolbar-title> -->
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
