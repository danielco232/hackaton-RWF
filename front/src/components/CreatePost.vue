<template>
  <v-card class="mx-auto" color="#FFA28C" dark max-width="400">
        <v-card-text class="text-h5 mb-0 pb-0 font-weight-bold text-center">
    מה יושב עליך?
    </v-card-text>
    <v-card-text class="mt-1 pt-0">
      <v-row class="d-flex justify-center py-0"
        ><v-col cols="10"
          ><v-textarea
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
      }
  }
};
</script>
