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
        depressed
        large
        color="warning"
        @click="backQuest()"
      >
        <v-icon>
          mdi-arrow-left
        </v-icon>
        Back
      </v-btn>
      <v-btn
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
    </div>

    </div>

  </div>
</template>

<script>
import {mapState} from 'vuex'

export default {

  data(){
    return{
      questNumber: 1,
      answerTrue: '',
      answerFinal:'',
      isRight: '',
      isAnswered: ''
    }
  },

  methods:{
    nextQuest(){
      this.answerTrue = ''
      this.answerFinal = ''
      this.isRight = ''
      this.isAnswered = ''
      this.questNumber != this.quests.length ? this.questNumber++ : ''
    },

    backQuest(){
      this.answerTrue = ''
      this.answerFinal = ''
      this.isRight = ''
      this.isAnswered = ''
      this.questNumber != 1 ? this.questNumber-- : ''

    },
    selectAnswer(value){
      this.isAnswered = true
      this.answerFinal == '' ? this.answerFinal = value : ''
      this.isRight = this.answerTrue == value ? true : false
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
      return allList
    }
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

  button{
    position: fixed;
    bottom: 0px;
    right: 0px; 
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