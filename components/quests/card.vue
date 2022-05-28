<template>
  <div class="main-quest ">
    <div class="card-quest d-flex-column" :class="currentQuest.difficulty">
      <div class="card-quest-info" >
        <p>{{ currentQuest.category }}</p>
        <p :class="currentQuest.difficulty">{{ currentQuest.difficulty }}</p>
        <v-spacer></v-spacer>
        <p>Question {{ questNumber}} / {{quests.length }}</p>
      </div>
    <div>
      <div class="btn-answers">
        <v-container>
          <v-row>
            <v-col cols="12">
              <h2 class="quest">{{ currentQuest.question }}</h2>
            </v-col>
          </v-row>
          <v-row>
            <v-col
            cols="12"
            sm="6"
            v-for="(ans,index) in getListAnswers"
            :key="index"
            >
            <div :class="{
                right: isAnswered && answerTrue == ans , 
                wrong: isAnswered && answerTrue != ans,
                selected: isAnswered && answerFinal == ans
                }"
              class="button-answer quest"
              @click="selectAnswer(ans)">
              {{ ans }}
              </div>
            </v-col>
          </v-row>
        </v-container>
      </div>
    </div>
    <v-spacer></v-spacer>
    <div class="container-btns mt-10">
       <v-spacer></v-spacer>
       <v-btn
        v-if="quests.length > questNumber"
        depressed
        :disabled="answerFinal === ''"
        large
        color="primary"
        @click="nextQuest()"
      >
        Next
        <v-icon>
          mdi-arrow-right
        </v-icon>
      </v-btn>

      <v-btn
        v-if="quests.length == questNumber"
        depressed
        :disabled="answerFinal === ''"
        large
        color="primary"
        to="/dashboard"
      >
        Finish
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
      questNumber: 1,
      answerTrue: '',
      answerFinal:'',
      isRight: '',
      isAnswered: '',
      localProgress: {
        right: 0,
        wrong: 0, 
        total: 0
      }
    }
  },

  methods:{
    ...mapActions('quiz',['setProgress']),

    resetSomeData(){
      this.answerTrue = ''
      this.answerFinal = ''
      this.isRight = ''
      this.isAnswered = ''
    },

    nextQuest(){
      this.resetSomeData()
      this.questNumber != this.quests.length ? this.questNumber++ : ''
    },

    selectAnswer(value){
      this.isAnswered = true
      let actAux = {}

      if (this.answerFinal === ''){ 
        this.answerFinal = value 
        this.isRight = this.answerTrue == this.answerFinal ? true : false
        
        this.localProgress.total = this.quests.length
        this.isRight ? this.localProgress.right++ : this.localProgress.wrong++

        actAux = this.localProgress
        this.setProgress(actAux)
        }
    }
  },

  computed:{
    ...mapState('quiz',{
    quests: state => state.questsGenerated
    }),

    currentQuest(){
      return this.quests[this.questNumber-1]
    },

    getListAnswers(){
      let allList = []
      this.answerTrue = this.currentQuest.correct_answer
      allList.push( this.currentQuest.correct_answer )
      allList.push(...this.currentQuest.incorrect_answers)
      allList.sort()
      return allList
    }
  },

  mounted() {
    this.setProgress(this.localProgress)
  }
}
</script>

<style lang="scss" scoped>

@import url('https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@400&display=swap');

  .main-quest{
    display: flex;
    justify-content: center;
    margin: auto;
    font-family: 'Roboto Mono', monospace;
    color: black !important;
  }

  .card-quest{
    height: 100%;
    width: 70vw;
    min-height: 500px;
    padding: 50px;
    background-color: white;
  }

  .card-quest-info{
    display: flex;
    gap: 10px;
    flex-wrap: wrap;
  }

  .card-quest-info p {
    padding: 10px 20px;
    border: 1px solid black;
    border-radius: 20px;
  }

  .quest{
    color: rgba(0, 0, 0, 0.87);
  }

  .btn-answers {
    display: flex;
    flex-wrap: wrap;
    gap: 60px;
    align-items: center;
  }

  p.easy {
    color: rgb(6, 172, 0);
    font-weight: bold;
  }
  p.medium {
    color: rgb(55, 0, 255);
    font-weight: bold;
  }
  p.hard {
    color: rgb(255, 0, 0);
    font-weight: bold;
  }

  .card-quest-info p:last-child {
    border: none;
  }

  .flip-enter-active {
    animation: flip-in 0.3s ease forwards;
  }

  .flip-leave-active {
    animation: flip-out 0.3s ease forwards;
  }

  @keyframes flip-out {
    from { transform: rotateY(0deg); }
    to { transform: rotateY(90deg); }
  }

  @keyframes flip-in {
    from { transform: rotateY(90deg); }
    to { transform: rotateY(0deg); }
  }

  button:active{
    animation: loading 3s linear infinite;
  }

  .right{
    background-color: rgb(47, 240, 47) !important;
    opacity: 0.7 !important;
    border: none;
  }

  .wrong{
    background-color: rgb(233, 42, 42) !important;
    opacity: 0.7 !important;
    border: none;
  }


  .selected{
    opacity: 1 !important;
  }

  .button-answer {
    border: 1px solid black;
    padding: 10px;
    font-size: 20px;
    border-radius: 20px;
    width: 100%;
    height: auto;
  }

  @media screen and (max-width: 650px) {
    .card-quest{
      width: 100vw !important;
      margin: 0 !important;
    }
    .main-quest {
      font-size: 80%;
    }
    button {
      font-size: 80% !important;
    }
  }
</style>