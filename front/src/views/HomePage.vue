<template>
  <div class="HomeClass">
    <AppBar />
    <v-main>
      <v-container>
        <create-post />
        <v-list>
          <v-list-item 
            v-for="(post, i) in posts"
            :key="i">
          </v-list-item>
        </v-list>
      </v-container>
    </v-main>
  </div>
</template>

<script>
import AppBar from '../components/AppBar'
import CreatePost from '../components/CreatePost'

export default {
  data() {
    return {
      posts: [],
      newPost: ''
    }
  },
  name: 'HomePage',
  components: {
    AppBar,
    CreatePost
  },
  methods: {
    createPost() {}
  }
}
</script>

<style lang="scss">
//.HomeClass {

//}
</style>
