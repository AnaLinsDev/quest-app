<template>
  <div class="main-register">
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
    display: flex;
    justify-content: center;
    margin: 80px auto;
  }
  .register-card{
    height: auto;
    width: 500px;
    background-color: white;
    border-radius: 20px;
    box-shadow: 0 0 1em rgb(202, 200, 200);
  }
</style>