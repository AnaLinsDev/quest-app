const axios = require('axios');
const url = 'http://localhost:3000'

export default {
  async getConfigOptions({commit}) {
    let data 

    await axios.get( url + '/quest_config')
    .then(
      resp => { data = resp.data }, 
      error => { console.error(error) }
    )

    commit('getConfigOptions', Object.entries(data))
	},

  async setConfig({commit}, config){
    commit('setConfig', config)
	},

  async setProgress({commit}, info){
    commit('setProgress', info)
	},

  async povoateQuests({commit, state}, configFinal){
    let data 
    let amount = configFinal.amount
    let difficulty = 0
    let category = 0
    let type = 0

    for(let e of state.list_config)  {
      if (e[0] == 'type') {
        for(let key in e[1]) {
          key == configFinal.type ? type = e[1][key] : 0
        }
      }
      else if (e[0] == 'category') {
        for(let key in e[1]) {
          key == configFinal.category ? category = e[1][key] : 0
        }
      }
      else if (e[0] == 'difficulty') {
        for(let key in e[1]) {
          key == configFinal.difficulty ? difficulty = e[1][key] : 0
        }
      }
    }

    let urbBase = `https://opentdb.com/api.php?`
    let url = `amount=${amount}&category=${category}&difficulty=${difficulty}&type=${type}`

    await axios.get( urbBase + url )
    .then(
      resp => { data = resp.data.results }, 
      error => { console.error(error) }
    )
    
    commit('povoateQuests', data)
  }
}
