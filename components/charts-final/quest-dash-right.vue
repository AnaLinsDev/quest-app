<template>
  <div class="single-chart" >
    <Doughnut 
      class="doughnut"
      v-if="loaded"
      :chartdata="chartdata"
      :options="options"
    />
  </div>
</template>

<script>
import Doughnut from '../charts-schema/doughnut.vue'

export default {

  name: 'ChartDoughnut',
  components:{ Doughnut },
  props:['progressdata'],

  data() {
    return{
      loaded: false,
      chartdata: null,
      options: null,
      labels: ['right', 'wrong'],
      data: [],
      backgroundColor: [
        'rgb(0, 255, 0)',
        'rgb(255, 0, 0)'
      ],
    }
  },
  
  async mounted () {

    console.log(this.progressdata)
    
    this.loaded = false

    this.data = [
      this.progressdata.right,
      this.progressdata.wrong
    ]

    this.chartdata = {
      labels: this.labels,
      datasets: [
        {
          data: this.data,
          backgroundColor: this.backgroundColor 
        }
      ]
    }
    this.options = {
      scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true,
              min :0
            }
          }]
          }
    }
      this.loaded = true
  }
  
}
</script>

<style scoped>
  .doughnut{
    width: 300px;
    height: 300px;
  }
</style>