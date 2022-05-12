<template>
<!-- eab885 -->
  <v-card class="mx-auto white--text" color="#FAC47D" dark max-width="400">
        <v-card-text class=" mb-0 pb-0 font-weight- text-center">
    מה יושב עליך?
    </v-card-text>
    <v-card-text class="mt-1 mb-0 py-0">
      <v-row class="d-flex justify-center  py-0"
        ><v-col cols="10"
          ><v-textarea
          hide-details
            v-model="newPost.body"
        
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
          this.newPost = { body: "" };
      }
  }
};
</script>
