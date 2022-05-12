<template>
  <v-card class="mx-auto" color="#a599fc" dark max-width="400">
    <v-card-text class="my-3 pb-0" >
      <v-row class="my-3 pb-0 d-flex justify-center align-center ">{{ match.username }}</v-row>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  props: {
    match: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped></style>
