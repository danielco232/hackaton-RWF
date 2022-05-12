<template>
  <v-card class="mx-auto" color="#f8c28c" dark max-width="400">
    <v-card-text class="mt-1 pt-0">
      <v-row class="d-flex justify-center"
        ><v-col cols="10"
          ><v-text-field
          class="mt-0"
          hide-details
            label="כותרת"
            v-model="newPost.title"
          ></v-text-field></v-col
      ></v-row>
      <v-row class="d-flex justify-center py-0"
        ><v-col cols="10"
          ><v-textarea
            v-model="newPost.body"
            label="תוכן"
            type="text"
          ></v-textarea></v-col
      ></v-row>
    </v-card-text>
    <v-card-actions class="pl-10">
      <v-row class="d-flex justify-end py-0"> 
          <v-btn outlined @click="createPost"> פרסם </v-btn>
      </v-row>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: "CreatePost",
  data() {
    return {
      newPost: {
        title: "",
        body: "",
      },
    };
  },
  methods: {
      createPost() {
          this.$emit('create-post', this.newPost);
      }
  }
};
</script>
