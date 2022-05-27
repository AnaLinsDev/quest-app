const axios = require('axios')

const url = 'http://localhost:5000'

export default {
  async login({ commit }, user) {
    console.log(user)
    await axios.post(`${url}/login`, { ...user })
      .then(
        (resp) => { commit('login', resp.data) },
        (error) => { console.error(error) },
      )
  },

  loginAsGuest({ commit }, user) {
    commit('loginAsGuest', user)
  },

  async register({ commit }, user) {
    await axios.post(`${url}/users`, { ...user })
      .then(
        (resp) => { commit('register', resp.data) },
        (error) => { console.error(error) },
      )
  },

  logout({ commit }) {
    commit('logout')
  },
  closeAlert({ commit }) {
    commit('closeAlert')
  },
}
