const axios = require('axios');
const url = 'http://localhost:5000'

export default {
  
  async setConfig({commit}, config){
    commit('setConfig', config)
	},

  async setProgress({commit}, info){
    commit('setProgress', info)
	},

  async povoateQuests({commit}, configFinal){
    console.log(configFinal)
    await axios.post(`${url}/games/quests/generate`, { ...configFinal })
    .then(
      (resp) => { commit('povoateQuests', resp.data) },
      (error) => { console.error(error) },
    )
  },

  async sendGameResult({commit}, result){
    console.log(result)
    await axios.post(`${url}/games`, { ...result })
    .then(
      (resp) => { console.log(resp.data) },
      (error) => { console.error(error) },
    )
  }
}
