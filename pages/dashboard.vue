<template>
  <div class="main-dashboard-quests">
    <div class="card-dashboard">
      <h1>Dashboard</h1>
      <div class="dashboard">

        <div>
          <ChartPie :progressdata="progress" />
        </div>

        <div class="dashboard-info">
          <h1>Right: {{progress.right}}</h1> 
          <h1>Wrong: {{progress.wrong}}</h1>
          <h1>Total: {{progress.total}}</h1>
        </div>

        <div>
          <ChartDoughnut :progressdata="progress"/>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
import ChartPie from '@/components/charts-final/quest-dash-result.vue'
import ChartDoughnut from '@/components/charts-final/quest-dash-right.vue'
import {mapState} from 'vuex'

export default {
  components:{ChartPie, ChartDoughnut},

  computed:{
    ...mapState('quiz',{
    progress: state => state.progress
    })
  },

}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@400&display=swap');
  
  .main-dashboard-quests{
    display: flex;
    justify-content: center;
    margin: 40px auto;
    font-family: 'Roboto Mono', monospace;
  }
  .card-dashboard{
    text-align: center;
    height: auto;
    padding: 40px;
    width: 80%;
    background-color: white;
    border-radius: 20px;
  }

  .dashboard-info{
    margin: auto;
  }
  .dashboard{
    display: flex;
    flex-wrap: wrap;
    gap: 40px;
    justify-content: space-around;
  }
</style>