<template>
    <div class="main-userInfo">
      <div class="card-userInfo pa-5">
        <h1 class="center">Profile</h1>
        <v-divider class="my-2"></v-divider>
        <h2 v-if="token !== ''">Token: {{token}}</h2>
        <h2 v-if="name">Name: {{name}}</h2>
        <h2 v-if="email">Email: {{email}}</h2>
      </div>
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
  .main-userInfo{
    display: flex;
    justify-content: center;
  }
  .card-userInfo{
    height: auto;
    width: 500px;
    background-color: white;
    border-radius: 20px;
  }
</style>