<template>
  <v-container class="px-15">
    <v-row class=" d-flex justify-center">
      <v-col cols="8">
        <v-card class="mx-15" color="#757194" dark>
          <v-img src="../assets/logo.png"></v-img>
          <v-card-title class="d-flex justify-center py-0"
            ><p class="">התחברות</p></v-card-title
          >
          <v-card-text class="py-0  font-weight-">
            <v-row class="d-flex justify-center">
              <v-col cols="10">
                <v-text-field
                  label="שם משתמש"
                  v-model="user.username"
                ></v-text-field>
              </v-col>
            </v-row>
            <v-row class="d-flex justify-center">
              <v-col cols="10">
                <v-text-field
                  label="סיסמא"
                  v-model="user.password"
                ></v-text-field>
              </v-col>
            </v-row>
            <v-row class="d-flex justify-center">
              <p
                @click="moveToSignin"
                class=" text-decoration-underline"
              >
                עוד אין לך חשבון? הירשם עכשיו
              </p>
            </v-row>
          </v-card-text>
          <v-card-actions class="pt-0 pb-5">
            <v-spacer />
            <v-btn outlined @click="loginUser"> המשך </v-btn>
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
      user: {
        username: "",
        password: "",
      },
    };
  },
  methods: {
    moveToSignin() {
      this.$router.push({ path: "signin" });
    },
    async loginUser() {
      try {
        await axios.post("http://localhost:3000/api/login", this.user);
      } catch {
        console.log("שגיאה");
      }
      this.$router.push({ path: "homepage" });
    },
  },
};
</script>

<style lang="scss" scoped></style>
