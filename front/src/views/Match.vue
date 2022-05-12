<template>
  <div class="HomeClass">
    <v-main>
      <v-container>
        <find-match-button @find-match="findMatch" />
        <match-card v-for="(match, i) in matches" :key="i" :match=match />
      </v-container>
    </v-main>
  </div>
</template>

<script>
import axios from 'axios';
import FindMatchButton from '../components/Match/FindMatchButton';
import MatchCard from '../components/Match/MatchCard';

export default {
  data() {
    return {
      matches: []
    };
  },
  name: "Match",
  components: {
    FindMatchButton,
    MatchCard
  },
  methods: {
    async findMatch() {
      try {
        this.matches = await axios.get('http://localhost:5000/match?username=gpvfplcb');
      } catch {
        console.log('שגיאה')
      }
    }
  }
};
</script>

<style lang="scss">
//.HomeClass {

//}
</style>
