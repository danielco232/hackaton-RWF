<template>
  <v-card  class="mx-auto pa-5" color="#a599fc" dark min-width="400" max-width="400">

    <v-card-text class="mt-1 pt-0 font-weight- text-center">
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
            <span class="subheading">{{0}}</span>
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
