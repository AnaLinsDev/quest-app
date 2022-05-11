<template>
  <div>
    <h1 class="center">Profile</h1>
    <div class="main-userInfo">
      <div v-if="token !== 'guestIdHolder'" class="card-userInfo">
        <h2>Token: {{token}}</h2>
        <h2>Name: {{name}}</h2>
        <h2>Email: {{email}}</h2>
      </div>
      <div v-else class="card-userInfo">
        <h2>Name: {{name}}</h2>
      </div>
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
    margin: 80px auto;
  }
  .card-userInfo{
    height: auto;
    width: 500px;
    padding: 50px 100px;
    background-color: white;
    border-radius: 20px;
    box-shadow: 0 0 1em rgb(202, 200, 200);
  }
</style>