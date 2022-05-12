<template>
  <div class="HomeClass">
    <AppBar />
    <v-main>
      <v-container class="mt-7">
        <find-match-button :show="showBtn" @find-match="findMatch" />
        <match-card v-for="(match, i) in matches" :key="i" :match="match" />
      </v-container>
    </v-main>
  </div>
</template>

<script>
import AppBar from "../components/AppBar";

import FindMatchButton from "../components/Match/FindMatchButton";
import MatchCard from "../components/Match/MatchCard";

export default {
  data() {
    return {
      matches: [],
    };
  },
  name: "Match",
  components: {
    AppBar,
    FindMatchButton,
    MatchCard,
  },
  computed: {
    showBtn() {
      return this.matches.length === 0;
    },
  },
  methods: {
    async findMatch() {
      this.matches = [
        {
          username: "banana123",
          bio: " אוהב בננות ופיאות נוספים",
        },
        {
          username: "kfc000",
          bio: "אוהב לטייל ולשות סקי",
        },
        {
          username: "bug2000",
          bio: "מתכנת להנאתי",
        },
      ];
    },
  },
};
</script>

<style lang="scss"></style>
