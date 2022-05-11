<template>
    <div class="absolute">
      <v-alert 
      v-model="alert" 
      class="alert"
      border="right"
      colored-border
      elevation="2"
      :type="type" 
      dismissible>
          {{message}}
      </v-alert>
    </div>
</template>

<script>
import {mapState, mapActions} from 'vuex'
export default {
    name: 'Alert',
    data(){
        return{
            alert: false
        }
    },
    computed:{
    ...mapState('user',{
        message: state => state.alert_message,
        type:  state => state.alert_type,
    })
    },

    watch:{
        message() {
            if (this.message !== '') {
                this.alert = true
            }
        },
        alert() {
            if (!this.alert) {
                this.closeAlert()
            }
        }
    },
    methods: {
        ...mapActions('user',['closeAlert']),
    }
}
</script>

<style>
.absolute {
    width: 100%;
    text-align: center;
    position: absolute;
}

.alert {
    margin: 10px auto;
    width: 400px;
}
</style>