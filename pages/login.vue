<template>
  <div class="main-login d-flex flex-column">
    <h1 class="title_quiz">QUIZ GAME</h1>
    <div class="login-card">
      <LoginForm />
    </div>
  </div>
</template>

<script>
  import LoginForm from '@/components/user/login-form.vue'
  export default {
    components:{LoginForm}
  }

</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Nova+Round&display=swap');
  .main-login {
    max-width: 500px;
    margin: 20px auto;
  }
  .login-card {
    background-color: white;
  }

</style>