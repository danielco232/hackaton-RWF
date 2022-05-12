<template>


  <div class="HomeClass">
    <v-main>
      <v-container>
        <create-post @create-post="createPost" />
        <v-row v-for="(post, i) in posts" :key="i">
          <post class="ma-5" :post="post" /> 
        </v-row>
      </v-container>
    </v-main>
  </div>
</template>

<script>
import CreatePost from "../components/CreatePost";
import Post from "../components/Post";
import axios from 'axios';

export default {
  data() {
    return {
      posts: [{
        id:111,
        title:"כותרת",
        body:"לורם איפסום דולור סיט אמט, קונסקטורר אדיפיסינג אלית קולורס מונפרד אדנדום סילקוף, מרגשי ומרגשח. עמחליף קולהע צופעט למרקוח איבן איף, ברומץ כלרשט מיחוצים. ",
        likes: 90
      },
      {
        id:112,
        title:"כותרת",
        body:"לורם איפסום דולור סיט אמט, קונסקטורר אדיפיסינג אלית קולורס מונפרד אדנדום סילקוף, מרגשי ומרגשח. עמחליף קולהע צופעט למרקוח איבן איף, ברומץ כלרשט מיחוצים. ",
        likes: 90
      }],
    };
  },
  name: "HomePage",
  components: {
    CreatePost,
    Post,
  },
  methods: {
      async createPost(newPost) {
        console.log('asdasd');
          try {
            await axios.post('http://localhost:3000/api/post/add', newPost);
          } catch {
              console.log('שגיאה')
          }

          this.posts = [newPost, ...this.posts]
      }
  }
};
</script>

<style lang="scss">
//.HomeClass {

//}
</style>
