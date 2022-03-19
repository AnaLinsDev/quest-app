<template>
  <v-card class="overflow-hidden">
    <v-app-bar
      absolute
      color="white"
      elevate-on-scroll
      scroll-target="#scrolling-techniques-7"
    >
      <v-app-bar-nav-icon></v-app-bar-nav-icon>

      <v-toolbar-title>Title</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-heart</v-icon>
      </v-btn>

      <v-btn 
      v-if="!loggedIn"
      color="white"
      to="/login"
      depressed>
        Login
      </v-btn>

      <v-btn 
      v-else
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
</style>