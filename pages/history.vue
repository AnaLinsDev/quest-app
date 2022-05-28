<template>
  <div class="d-flex justify-center">
    <v-card
      elevation="10"
      width="600px"
      max-width="600px"
      max-height="80vh"
      class="pa-5 overflow-y-auto"
    >
    <h2 class="center">My History</h2>

      <v-card
        class="d-flex ma-5 pa-5"
        v-for="(game, key) in userHistory"
        :color="game.result ? 'success' : 'error'"
        :key="key"
      >
        <h3 v-if="game.result">You Won</h3>
        <h3 v-else>You Lost</h3>
        <v-spacer></v-spacer>
        <h3>{{ dateFormated(game.date) }}</h3>
      </v-card>
    </v-card>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  data(){
    return{
      userHistory: []
    }
  },
  computed: {
    ...mapState("user", {
      token: (state) => state.token
    })
  },
  mounted() {
    this.getUserHistory(this.token).then((resp => this.userHistory = resp.data))
  },
  methods: {
    ...mapActions("quiz", ["getUserHistory"]),

    dateFormated(date) {
      let day = date.split('T')[0]
      let time = date.split('T')[1].split('.')[0]
      let newDate = day + ' ' + time
      return newDate
    }
  }
}
</script>

<style>
  .center{
    text-align: center;
  }
</style>
