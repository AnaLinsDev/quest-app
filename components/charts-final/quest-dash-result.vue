<template>
  <div class="single-chart" >
    <Pie 
      class="pie"
      v-if="loaded"
      :chartdata="chartdata"
      :options="options"
    />
  </div>
</template>

<script>
import Pie from '../charts-schema/pie.vue'

export default {

  name: 'ChartPie',
  components:{ Pie },
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
  .pie{
    width: 300px;
    height: 300px;
  }
</style>