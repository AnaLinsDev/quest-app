<template>
   <div class="login-form"> 
     <h1>Login <span v-if="isGuest" >as a guest</span></h1>
     <v-form
        ref="form"
        v-model="valid"
        lazy-validation
      >
        <v-text-field
          v-model.trim="username"
          :counter="10"
          :rules="usernameRules"
          label="Username"
          required
        ></v-text-field>

        <v-text-field
          v-if="!isGuest"
          v-model.trim="password"
          :rules="passwordRules"
          label="Password"
          type="password"
          required
        ></v-text-field>

        <v-btn
          :disabled="!setValid"
          color="success"
          v-if="!isGuest"
          class="mr-4"
          @click="loginUser"
        >
          Login
        </v-btn>

        <v-btn
          v-else
          :disabled="!setValidGuest"
          color="success"
          class="mr-4"
          @click="loginUser"
        >
          Login as a guest
        </v-btn>

        <p id="question">Don't have an account ?</p>

        <div>
          <v-btn
            color="warning"
            to="/register"
          >
            Register
          </v-btn>

          <v-btn
            v-if="!isGuest"
            color="warning"
            @click="setLoginGuest"
          >
            Login as a guest
          </v-btn>
          
          <v-btn
            v-else
            color="warning"
            @click="setLoginGuest"
          >
            Login as a user
          </v-btn>

        </div>
    </v-form></div>
</template>


<script>
  import {mapActions} from 'vuex'

  export default {
    data: () => ({
      isGuest: false,
      valid: true,
      password: '12345', 
      username: 'Ana',

      usernameRules: [
        v => !!v || 'Name is required',
        v => (v && v.length <= 10) || 'Name must be less than 10 characters',
      ],

      passwordRules: [
        p => !!p || 'Password is required',
      ]

    }),


    computed:{
      setValid(){
        return this.password.trim() == "" || this.username.trim() == "" 
        ? false : true
      },
      setValidGuest(){
        return this.username.trim() == "" 
        ? false : true
      }
    },

    methods: {
      ...mapActions('user',['login', 'loginAsGuest']),
      async loginUser(){ 
        if(this.isGuest){  
          await this.loginAsGuest({ 
            name: this.username 
          })
        }
        else{
          await this.login({
            name: this.username,
            password: this.password
          })
        }
        this.$router.push('/configQuiz')
      },
      setLoginGuest() {
        this.isGuest = !this.isGuest
      }
    },
  }
</script>

<style>
  .login-form{
    padding: 40px;
    text-align: center;
  }

  #question{
    margin: 20px;
    color: rgb(136, 133, 133);
  }

  @media (max-width: 600px){
    .login-form{
      padding: 20px;
    }
  }
</style>