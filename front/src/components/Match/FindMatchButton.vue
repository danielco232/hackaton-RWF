<template>
  <v-btn outlined @click="findMatch"> מצא את המאצ׳ שלי </v-btn>
</template>

<script>
export default {
  methods: {
      findMatch() {
          this.$emit('find-match');
      }
  }
};
</script>

<style lang="scss" scoped></style>