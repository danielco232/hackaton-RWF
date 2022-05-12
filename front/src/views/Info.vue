<template>
  <div>
    <AppBar />

    <v-main>
      <v-container class="mt-7">
        <v-card
          class="mx-auto pt-5 pa-5"
          color="#FAC47D"
          dark
          min-width="400"
          max-width="400"
        >
          <v-card-text class="mt-1 pt-0 font-weight- text-center">
            קצת עלינו
            <br />
            rwf מקשרת אותך לאנשים שמרגישים כמוך, אשר תוכל\י להיעזר בהם ולהכיר את
            הזכויות שלך. בנוסף, rwf מאפשר לך למצוא match בין אנשים שונים
            המחוברים לרשת, ולשוחח איתם, לעלות פוסטים שונים גם בצורה אנונימית,
            ולהגיב על פוסטים של אנשים אחרים.
          </v-card-text>
          <v-card-actions class="pl-10">
            <v-row class="d-flex justify-center">
              <v-btn outlined @click="navToExtraReading">
                לקריאה נוספת באתר כל זכות
              </v-btn>
            </v-row>
          </v-card-actions>
        </v-card>
      </v-container>
    </v-main>
  </div>
</template>

<script>
import AppBar from "../components/AppBar";

export default {
  name: "Info",
  components: {
    AppBar,
  },
  methods: {
    navToExtraReading() {
      window.open(
        "https://www.kolzchut.org.il/he/%D7%A0%D7%9B%D7%99_%D7%A6%D7%94%22%D7%9C"
      );
    },
  },
};
</script>

<style lang="scss"></style>
