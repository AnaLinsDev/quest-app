<template>
  <Card />
</template>

<script>
import {mapState, mapActions} from 'vuex'
import Card from '@/components/quests/card.vue'

export default {
  components: { Card },

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
    background-color: whitesmoke;
    border: 1px solid black;
  }

  .container-btns{
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    justify-content: space-between;
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

  button{
    position: fixed;
    bottom: 0px;
    right: 0px; 
  }

  button:active{
    animation: loading 2s linear infinite;
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

</style>