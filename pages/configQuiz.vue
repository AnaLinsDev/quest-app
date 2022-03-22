<template>
  <div>

    <h1 class="center">
      <span v-if="!userConfig"> Default Config Quiz</span> 
      <span v-else > User Config Quiz</span> 
    </h1>

    <div class="resume-quiz-config">
      <h2>Amount: {{configChanged.amount}}</h2>
      <h2>Category: {{configChanged.category}}</h2>
      <h2>Difficulty: {{configChanged.difficulty}}</h2>
      <h2>Type: {{configChanged.type}}</h2>
    </div>

    <div class="form-quiz-config">
      <div class="card-quiz-config">
        <v-container fluid>
            <v-row align="center">
              <v-col
                class="d-flex"
                cols="12"
                sm="6"
              >
                <v-select
                  :items="configOptions[0][1]"
                  v-model="amount"
                  filled
                  label="Amount"
                ></v-select>
              </v-col>

              <v-col
                class="d-flex"
                cols="12"
                sm="6"
              >
                <v-select
                  :items="Object.keys(configOptions[1][1])"
                  v-model="category"
                  filled
                  label="Category"
                ></v-select>
              </v-col>

              <v-col
                class="d-flex"
                cols="12"
                sm="6"
              >
                <v-select
                  :items="Object.keys(configOptions[3][1])"
                  v-model="type"
                  filled
                  label="Type"
                ></v-select>
              </v-col>

              <v-col
                class="d-flex"
                cols="12"
                sm="6"
              >
                <v-select
                  :items="Object.keys(configOptions[2][1])"
                  v-model="difficulty"
                  filled
                  label="Difficulty"
                ></v-select>
              </v-col>
            </v-row>
          </v-container>

      <v-btn
        tile
        @click="generateQuestions"
        color="success">

        <v-icon left>
          mdi-creation
        </v-icon>

        Generate
      </v-btn>
      </div>
    </div>
  </div>
</template>

<script>
import {mapState, mapActions} from 'vuex'

export default {

  data(){
    return{
      amount: 5,
      type:"Any",
      difficulty:"Any",
      category:"Any",
    }
  },

  computed:{
    ...mapState('quiz',{
    userConfig: state => state.isUserConfig,
    config: state => state.config,
    configOptions: state => state.list_config
    }),
  
    configChanged(){
      this.amount != '' || this.type != 'Any' ||
      this.difficulty != 'Any' || this.category != 'Any' ?

      this.setCurrentConfig({
        amount: this.amount, 
        difficulty: this.difficulty,
        category: this.category, 
        type: this.type
      }) : ''

      return {
        amount: this.amount, 
        difficulty: this.difficulty,
        category: this.category, 
        type: this.type
      }
    }
  },

  methods:{
    ...mapActions('quiz',
    ['getConfigOptions', 'setConfig', 'povoateQuests']),
    
    async povoateQuizOptions(){
      await this.getConfigOptions()
    },

    async setCurrentConfig(config){
      await this.setConfig({
        amount: config.amount, 
        difficulty: config.difficulty,
        category: config.category, 
        type: config.type
      })
    },

    async generateQuestions(){
      await this.povoateQuests({
        amount: this.amount, 
        difficulty: this.difficulty,
        category: this.category, 
        type: this.type
      })
      this.$router.push('/quests')
    }
  },

  async mounted(){
    await this.povoateQuizOptions()
  }
}
</script>

<style>
  .center{
    text-align: center;
  }
  .resume-quiz-config{
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    justify-content: space-between;
    height: auto;
    margin: 30px 100px;
    padding: 20px 80px;
    background-color: white;
    border: 1px solid black;
  }

  .form-quiz-config{
    display: flex;
    justify-content: center;
    margin: 80px auto;
  }

  .card-quiz-config{
    height: auto;
    width: 1000px;
    padding: 50px 100px;
    background-color: white;
    border: 1px solid black;
  }

</style>