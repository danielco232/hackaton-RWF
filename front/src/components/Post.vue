<template>
  <v-card class="mx-auto" color="#f8c28c" dark max-width="400">
    <v-card-text class="text-h5 mb-0 pb-0 font-weight-bold text-center">
      {{post.title}}
    </v-card-text>
    <v-card-text class="mt-1 pt-0 text-h6 font-weight-bold text-center">
     {{post.body}}
    </v-card-text>
    <v-card-actions class="pl-10">
      <v-row>
        <v-spacer></v-spacer>
            <span class="subheading mx-1">{{post.likes}}</span>
        <v-icon class="mx-1">
          mdi-heart
        </v-icon>
        <span class="mx-1">·</span>
            <span class="subheading">{{3 
            }}</span>
        <v-icon class="mx-1">
          mdi-comment-multiple
        </v-icon>
      </v-row>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  props: {
    post: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped></style>
