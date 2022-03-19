<template>
  <div class="main-login">
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
  .main-login{
    display: flex;
    justify-content: center;
    margin: 80px auto;
  }
  .login-card{
    height: auto;
    width: 500px;
    background-color: white;
    border-radius: 20px;
    box-shadow: 0 0 1em rgb(202, 200, 200);
  }
</style>