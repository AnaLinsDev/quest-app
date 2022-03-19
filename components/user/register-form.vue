<template>
   <div class="register-form"> 
     <h1>Register</h1>
     <v-form
        ref="form"
        v-model="valid"
        lazy-validation
      >
        <v-text-field
          v-model="username"
          :counter="10"
          :rules="usernameRules"
          label="Username"
          required
        ></v-text-field>

        <v-text-field
          v-model="email"
          :rules="emailRules"
          label="E-mail"
          required
        ></v-text-field>

        <v-text-field
          v-model="password"
          label="Password"
          type="password"
          required
        ></v-text-field>

        <v-btn
          :disabled="!valid"
          color="success"
          class="mr-4"
          @click="register"
        >
          register
        </v-btn>

        <v-btn
            color="warning"
            to="/login"
          >
            go to login
        </v-btn>

    </v-form></div>
</template>


<script>
  export default {
    data: () => ({
      registerAsGuest: false,
      valid: true,

      password: '', 

      username: '',
      usernameRules: [
        v => !!v || 'Name is required',
        v => (v && v.length <= 10) || 'Name must be less than 10 characters',
      ],
      email: '',
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
      ],
    }),

    methods: {
      register () {
        this.$refs.form.validate()
        // fazer req vuex
      },

    },
  }
</script>

<style>
  .register-form{
    padding: 40px;
    text-align: center;
  }

  #question{
    margin: 20px;
    color: rgb(136, 133, 133);
  }

  @media (max-width: 600px){
    .register-form{
      padding: 20px;
    }
  }
</style>