<template>
   <div class="login-form"> 
     <h1>Login <span v-if="isGuest" >as a guest</span></h1>
     <v-form
        ref="form"
        v-model="valid"
        lazy-validation
      >
        <v-text-field
          v-model.trim="email"
          :rules="emailRules"
          label="Email"
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
          v-if="!isGuest"
          class="mr-4 purle_btn"
          @click="loginUser"
        >
          Login
        </v-btn>

        <v-btn
          v-else
          :disabled="!setValidGuest"
          class="mr-4 purle_btn"
          @click="loginUser"
        >
          Login as a guest
        </v-btn>

        <p id="question">Don't have an account ?</p>

        <div>
          <v-btn
            class="orange_btn"
            to="/register"
          >
            Register
          </v-btn>

          <v-btn
            v-if="!isGuest"
            class="orange_btn"
            @click="setLoginGuest"
          >
            Login as a guest
          </v-btn>
          
          <v-btn
            v-else
            class="orange_btn"
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
      password: '123456', 
      email: 'wintes@email.com',

      emailRules: [
        v => !!v || 'Email is required'
      ],

      passwordRules: [
        p => !!p || 'Password is required',
      ]

    }),


    computed:{
      setValid(){
        return this.password.trim() == "" || this.email.trim() == "" 
        ? false : true
      },
      setValidGuest(){
        return this.email.trim() == "" 
        ? false : true
      }
    },

    methods: {
      ...mapActions('user',['login', 'loginAsGuest', 'alert']),
      async loginUser(){ 
        if(this.isGuest){  
          await this.loginAsGuest({ 
            email: this.email 
          })
        }
        else{
          await this.login({
            email: this.email,
            password: this.password
          })
          .catch(err => this.alert({message: err.response.data.message, type: 'error'}))
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