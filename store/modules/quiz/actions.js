const axios = require('axios');
const url = 'http://localhost:5000'

export default {
  
  async setConfig({commit}, config){
    commit('setConfig', config)
	},

  async setProgress({commit}, info){
    commit('setProgress', info)
	},

  async povoateQuests({commit, state}, configFinal){
    console.log(configFinal)
    await axios.post(`${url}/games/quests/generate`, { ...configFinal })
    .then(
      (resp) => { console.log(resp) },
      (error) => { console.error(error) },
    )
  }
}
