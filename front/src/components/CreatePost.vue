<template>
  <v-text-field
    v-model="newPost"
    :append-outer-icon="mdi-send"
    :prepend-icon="icon"
    filled
    clear-icon="mdi-close-circle"
    clearable
    label="Message"
    type="text"
    @click:append-outer="createPost"
  ></v-text-field>
</template>

<script>
export default {
  name: 'CreatePost'
}
</script>