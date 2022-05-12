<template>
  <v-card class="mx-auto" color="#f8c28c" dark max-width="400">
    <v-card-text class="text-h5 mb-0 pb-0 font-weight-bold text-center">
      {{match.user}}
    </v-card-text>
    <v-card-actions class="pl-10">
        <v-icon class="mx-1">
          mdi-heart
        </v-icon>
    </v-card-actions>
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