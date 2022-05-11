<template>


  <div class="HomeClass">
    <v-main>
      <v-container>
        <create-post />
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
      newPost: "",
    };
  },
  name: "HomePage",
  components: {
    CreatePost,
    Post,
  },
  methods: {
    createPost() {},
  },
};
</script>

<style lang="scss">
//.HomeClass {

//}
</style>
