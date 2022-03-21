const axios = require('axios');
const url = 'http://localhost:8000'

export default {
  async login({commit}, user) {
    let data 
    let userApiData

    await axios.get( url + '/users')
    .then(
      resp => { data = resp.data }, 
      error => { console.error(error) }
    )

    // essa parte não iria precisar se tivesse uma api com endpoint login
    // aqui fiz só uma fake api com crud
    data.forEach(e => 
      (e.name == user.name && e.password == user.password) ?
      userApiData = e : ''
      );

    commit('login', userApiData)
	},

  loginAsGuest({commit}, user) {
		commit('loginAsGuest', user)
	},

  async register({commit}, user) {

    let data 

    await axios.post( url + '/users', { ...user } )
    .then(
      resp => { data = resp.data }, 
      error => { console.error(error) }
    )

    commit('register', data)
  },

  logout({commit}) {
		commit('logout')
	}
}