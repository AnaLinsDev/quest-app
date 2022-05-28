<template>
  <div class="d-flex justify-center">
    <v-card class="d-flex flex-column pa-8" width="50%" min-width="200px" outlined>
      <h1 class="d-flex justify-center">Dashboard</h1>
      <div class="d-flex justify-space-around flex-wrap my-6">
        <h2>Right: {{ progress.right }}</h2>
        <h2>Wrong: {{ progress.wrong }}</h2>
        <h2>Total: {{ progress.total }}</h2>
      </div>
      <h1>{{ resultMessage }}</h1>
      <div class="">
        <v-progress-linear
          v-model="percentage"
          :color="isWon ? 'success' : 'red  darken-2'"
          height="25"
        >
          <template v-slot:default="{ value }">
            <strong>{{ Math.ceil(value) }}%</strong>
          </template>
        </v-progress-linear>
      </div>
    </v-card>
  </div>
</template>

<script>
import ChartPie from "@/components/charts-final/quest-dash-result.vue";
import ChartDoughnut from "@/components/charts-final/quest-dash-right.vue";
import { mapState, mapActions } from "vuex";

export default {
  components: { ChartPie, ChartDoughnut },

  computed: {
    ...mapState("quiz", {
      progress: (state) => state.progress,
    }),
    ...mapState("user", {
      token: (state) => state.token,
    }),

    resultMessage() {
      return this.isWon ? "You won !!" : "You lost !!"
    },

    isWon() {
      return this.percentage >= 70 ? true : false
    },

    percentage() {
      return (100 * this.progress.right) / this.progress.total
    }
  },
  mounted() {
    if (this.token) {
      this.sendGameResult({
      userId: this.token,
      successes: this.progress.right,
      mistakes: this.progress.wrong,
      result: this.isWon
    })
    }
  },
  methods: {
    ...mapActions("quiz", ["sendGameResult"]),
  }
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@400&display=swap");
.main-dashboard-quests {
  font-family: "Roboto Mono", monospace;
}
</style>

<!--
        <div>
          <ChartPie :progressdata="progress" />
        </div>
        <div>
          <ChartDoughnut :progressdata="progress"/>
        </div>
        -->
