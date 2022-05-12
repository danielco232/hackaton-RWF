<template>
  <v-container class="">
    <v-row class=" d-flex justify-center">
      <v-col cols="8">
        <v-card class="pt-10" color="#757194" dark>
          <v-card-title class="d-flex justify-center py-0"
            ><p class="">הרשמה</p></v-card-title
          >
          <v-card-text class="py-0 text-h5 font-weight-">
            <v-row class="d-flex justify-center">
              <v-col cols="5">
                <v-text-field
                  v-model="newUser.fname"
                  label="שם פרטי"
                ></v-text-field>
              </v-col>
              <v-col cols="5">
                <v-text-field
                  v-model="newUser.lname"
                  label="שם משפחה"
                ></v-text-field>
              </v-col>
            </v-row>
            <v-row class="d-flex justify-center">
              <v-col cols="5">
                <v-text-field
                  v-model="newUser.username"
                  label="שם משתמש"
                ></v-text-field>
              </v-col>
              <v-col cols="5">
                <v-text-field
                  v-model="newUser.password"
                  type="password"
                  label="סיסמא"
                ></v-text-field>
              </v-col>
            </v-row>
            <v-row class="d-flex justify-center">
              <v-col cols="2">
                <v-text-field
                  v-model="newUser.age"
                  type="number"
                  label="גיל"
                ></v-text-field>
              </v-col>
              <v-col cols="4">
                <v-file-input truncate-length="25" label="תמונה"></v-file-input>
              </v-col>
              <v-col cols="4">
                <v-autocomplete
                  v-model="newUser.unit"
                  :items="[
                    'גולני',
                    'גבעתי',
                    'צנחנים',
                    'נחל',
                    'כפיר',
                    'אגוז',
                    'דובדבן',
                  ]"
                  label="יחידה"
                ></v-autocomplete>
              </v-col>
            </v-row>
            <v-row class="d-flex justify-center">
              <v-col cols="5">
                <v-text-field
                  v-model="newUser.injury"
                  label="פציעה"
                ></v-text-field>
              </v-col>
              <v-col cols="5">
                <v-autocomplete
                  v-model="newUser.address"
                  :items="[
                    'ירושלים',
                    'רמת גן',
                    'אשדוד',
                    'גן יבנה',
                    'בת ים',
                    'הר אדר',
                    'חולון',
                  ]"
                  label="עיר מגורים"
                ></v-autocomplete>
              </v-col>
            </v-row>
            <v-row class="d-flex justify-center">
              <v-col cols="10">
                <v-textarea
                  v-model="newUser.bio"
                  label="ספר לנו משהו על עצמך"
                ></v-textarea>
              </v-col>
            </v-row>
            <v-row class="d-flex justify-center">
              <p
                @click="moveToLogin"
                class="text-subtitle-1 text-decoration-underline"
              >
                כבר יש לך חשבון? התחבר
              </p>
            </v-row>
          </v-card-text>
          <v-card-actions class="pt-0 pb-5">
            <v-spacer />
            <v-btn @click="addUser" outlined> המשך </v-btn>
            <v-spacer />
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      newUser: {
        username: "",
        password: "",
        fname: "",
        lname: "",
        age: "",
        address: "",
        photo: "",
        unit: "",
        injury: "",
        bio: "",
      },
    };
  },
  methods: {
    moveToLogin() {
      this.$router.push({ path: "login" });
    },
    async addUser() {
      try {
        await axios.post("http://localhost:3000/api/register", this.newUser);
      } catch {
        console.log("שגיאה");
      }
      this.$router.push({ path: "homepage" });
    },
  },
};
</script>

<style lang="scss" scoped>
.v-container {
  dir: rtl !important;
}
</style>
