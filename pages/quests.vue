<template>
  <div class="main-quest">
    <div class="card-quest" :class="currentQuest.difficulty">
      <div class="card-quest-info" >

        <p>{{ currentQuest.category }}</p>
        <p>{{ currentQuest.type }}</p>
        <p :class="currentQuest.difficulty">{{ currentQuest.difficulty }}</p>
        <v-spacer></v-spacer>
        <p>Question {{ questNumber}} / {{quests.length }}</p>

      </div>

    <div class="question">
      <br>
      <h2>{{ currentQuest.question }}</h2>
      <br>
      <div class="btn-answers">
        <v-btn 
        depressed
        large
        v-for="ans in getListAnswers"
        :class="{
          right: isAnswered && answerTrue == ans , 
          wrong: isAnswered && answerTrue != ans,
          selected: isAnswered && answerFinal == ans
          }"
        @click="selectAnswer(ans)"
        :key="ans">
        {{ ans }}
        </v-btn>
      </div>
    </div>
    

    <div class="container-btns">

       <v-btn
        v-if="quests.length > questNumber && answerFinal != ''"
        depressed
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
        v-if="quests.length == questNumber && answerFinal != ''"
        depressed
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
    
    randOrd() {
    return (Math.round(Math.random())-0.5);
    },

    nextQuest(){
      this.resetSomeData()
      this.questNumber != this.quests.length ? this.questNumber++ : ''
    },

    selectAnswer(value){

      this.isAnswered = true
      let actAux = {}

      if (this.answerFinal == ''){ 

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

  mounted(){
    this.setProgress(this.localProgress)
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@400&display=swap');
  
  .main-quest{
    display: flex;
    justify-content: center;
    margin: 40px auto;
    font-family: 'Roboto Mono', monospace;
  }

  .card-quest{
    height: auto;
    width: 70vw;
    min-height: 500px;
    padding: 50px;
    background-color: white;
    border-radius: 20px;
    box-shadow: 0 0 1em rgb(202, 200, 200);
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

  .question{
    height: 300px;
  }

  .btn-answers {
    display: flex;
    flex-wrap: wrap;
    gap: 60px;
    color: white;
    align-items: center;
  }

  .btn-answers .theme--light.v-btn.v-btn--has-bg{
    background-color: white;
    border: 1px solid black;
  }

  .container-btns{
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    justify-content: space-between;
  }

  div.easy {
    box-shadow: 0 0 1em rgb(9, 255, 0);
  }
  div.medium {
    box-shadow: 0 0 1em rgb(55, 0, 255);
  }
  div.hard {
    box-shadow: 0 0 1em rgb(255, 0, 0);
  }

  p.easy {
    background-color: rgb(9, 255, 0);
    font-weight: bold;
  }
  p.medium {
    background-color: rgb(55, 0, 255);
    font-weight: bold;
    color: white;
  }
  p.hard {
    background-color: rgb(255, 0, 0);
    font-weight: bold;
    color: white;
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

  button{
    position: fixed;
    bottom: 0px;
    right: 0px; 
  }

  button:active{
    animation: loading 2s linear infinite;
  }

  .right{
    background-color: rgb(77, 255, 77) !important;
  }

  .wrong{
    background-color: rgb(255, 89, 89) !important;
  }

  .selected{
    box-shadow: 0 0 1em rgb(0, 0, 0);
  }

</style>