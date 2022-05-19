<template>
  <v-card class="overflow-hidden menu">
    <v-app-bar
      v-if="!loggedIn"
      absolute
      color="white"
      elevate-on-scroll
      scroll-target="#scrolling-techniques-7"
    >

      <v-toolbar-title>Quiz Game</v-toolbar-title>
      <v-spacer></v-spacer>

      <v-btn 
      color="white"
      to="/login"
      depressed>
        Login
      </v-btn>

    </v-app-bar>

    <v-app-bar
      v-else
      absolute
      color="white"
      elevate-on-scroll
      scroll-target="#scrolling-techniques-7"
    >

      <v-toolbar-title>Quiz App</v-toolbar-title>
      <v-spacer></v-spacer>

      <v-btn icon color="blue"
      to="/configQuiz">
        <v-icon>mdi-cog-play</v-icon>
      </v-btn>

      <v-btn icon color="blue"
      to="/userInfo">
        <v-icon>mdi-account</v-icon>
      </v-btn>

      <v-btn 
      color="white"
      @click="logoutUser"
      depressed>
        Logout
      </v-btn>

    </v-app-bar>

    <v-sheet
      id="scrolling-techniques-7"
      class="overflow-y-auto"
      max-height="600"
    >
      <v-container class="menu-container" style="height: 60px;">
      </v-container>
    </v-sheet>
  </v-card>
</template>

<script>
  import { mapState, mapActions } from 'vuex'

  export default {
    computed: mapState('user', {
      loggedIn: state => state.loggedIn
    }),

    methods: {
      ...mapActions('user',['logout']),
      logoutUser(){
        this.logout()
        this.$router.push('/login')
      }
    }
  }
</script>

<style >
  .container {
      padding: 0px ;
      margin: 0px;
      max-width: 100vw !important;
  }
  .menu {
    margin-bottom: 20px;
  }
</style>