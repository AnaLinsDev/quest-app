<template>
  <div class="main-register d-flex flex-column">
    <h1 class="title_quiz">QUIZ GAME</h1>
    <div class="register-card">
      <RegisterForm />
    </div>
  </div>
</template>

<script>
  import RegisterForm from '@/components/user/register-form.vue'
  export default {
    components:{ RegisterForm }
  }

</script>

<style>
  .main-register{
    max-width: 500px;
    margin: 20px auto;
  }
  .register-card{
    height: auto;
    width: 500px;
    background-color: white;
    border-radius: 20px;
    box-shadow: 0 0 1em rgb(202, 200, 200);
  }
</style>