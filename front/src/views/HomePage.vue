<template>
  <div class="HomeClass">
    <AppBar />
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
import AppBar from "../components/AppBar";

import CreatePost from "../components/CreatePost";
import Post from "../components/Post";
import axios from "axios";

export default {
  data() {
    return {
      posts: [
        {
          id: 171,
          title: "post-552",
          body:
            "גיליתי פה שיש עוד הרבה כמוני ושיש לי הרבה זכויות...מתחיל לממש אותם כבר עכשיו",
          likes: 222,
        },
        {
          id: 113,
          title: "lmspN",
          body:
            "בימים האחרונים כבר כל דבר מבאס אותי ואני תמיד בדאוון, סתם למשל פרצו לי היום למחשב והתעצבנתי",
          likes: 106,
        },
        {
          id: 113,
          title: "lmspN",
          body:
            "אתמול היה לי מפגש שלישי עם מטפלת, האמת שהיא אחלה וטוב לפרוק למישהו זר ולא קשור",
          likes: 106,
        },
        {
          id: 180,
          title: "post_135",
          body:
            "היום הבנתי שהרבה לפניי חוו את אותה הטראומה והחלטתי לדווח על זה כדי למנוע מזה להמשיך לקרות... היה קשה אעדכן איך זה מתפתח",
          likes: 245,
        },
        {
          id: 179,
          title: "post_401",
          body:
            "היום עברתי את הבסיס הקודם שלי ונזכרתי בהרבה דברים, קשה לצאת מהזכרונות, אני גם חולם על זה כל לילה. טיפים לשינה טובה יתקבלו בשמחה",
          likes: 199,
        },
      ],
    };
  },
  name: "HomePage",
  components: {
    CreatePost,
    Post,
    AppBar,
  },
  methods: {
    async createPost(newPost) {
      console.log("asdasd");
      try {
        await axios.post("http://localhost:3000/api/post/add", newPost);
      } catch {
        console.log("שגיאה");
      }

      this.posts = [newPost, ...this.posts];
    },
  },
};
</script>

<style lang="scss"></style>
