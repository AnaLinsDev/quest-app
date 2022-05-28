<template>
    <div class="d-flex justify-center">
      <v-card elevation="10" width="600px" max-width="600px" class="card-userInfo pa-5">
        <h1 class="center">Profile</h1>
        <v-divider class="my-2"></v-divider>
        <h3 v-if="name" class="mt-3">Name: {{name}}</h3>
        <h3 v-if="email" class="mt-3">Email: {{email}}</h3>
        <div class="d-flex">
          <v-spacer></v-spacer>
          <v-btn class="mt-6" color="info" to="/history">
            <v-icon left>mdi-controller-classic</v-icon>
            My History
          </v-btn>
        </div>
      </v-card>
    </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  computed: mapState('user',{
    name: state => state.name,
    email: state => state.email,
    token: state => state.token
    })
}
</script>

<style>
  .center{
    text-align: center;
  }

  .card-userInfo{
    height: auto;
    width: 500px;
    background-color: whitesmoke;
  }
</style>