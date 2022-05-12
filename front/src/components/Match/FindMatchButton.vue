<template>
  <v-card
    class="mx-auto pa-5"
    color="#FAC47D"
    dark
    min-width="400"
    max-width="400"
  >
    <v-card-text class="mt-1 pt-0 font-weight- text-center">
      מי הוא המאצ'?
      <br />
      המאצ' הוא בחיר לבך, אותו חלמת תמיד למצוא אך לעולם לא נקרה בדרכך.
      סתם, המאצ' הוא נכה צה"ל בעצמו שהתמודד עם חווייה דומה לשלך ויכול לייעץ וללוות אותך באמצעות
      שיח אנונימי. האלגוריתמים שלנו מצליבים קריטריונים שונים הידועים לנו עליכם ומנגישים עבורכם את האדם
      שיהיה המתאים ביותר להזדהות איתכם, להבין אתכם ולתת לכם את הליווי המדויק ביותר.
    </v-card-text>
    <v-card-actions class="pl-10">
      <v-row class="d-flex justify-center">
        <v-btn v-if="show" outlined @click="findMatch"> מצא את המאצ׳ שלי </v-btn>
      </v-row>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  props: {
    show: {
      type: Boolean,
    },
  },
  methods: {
    findMatch() {
      this.$emit("find-match");
    },
  },
};
</script>

<style lang="scss" scoped></style>
