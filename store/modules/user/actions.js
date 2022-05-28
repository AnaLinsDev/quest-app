const axios = require('axios')

const url = 'http://localhost:5000'

export default {
  async login({ commit }, user) {
    return axios.post(`${url}/login`, { ...user })
      .then(
        (resp) => { commit('login', resp.data) }
      )
  },

  loginAsGuest({ commit }, user) {
    commit('loginAsGuest', user)
  },

  async register({ commit }, user) {
    return await axios.post(`${url}/users`, { ...user }).then(
        (resp) => { commit('register', resp.data) }
      )
  },

  logout({ commit }) {
    commit('logout')
  },

  alert({ commit }, info) {
    commit('alert', info)
  },

  closeAlert({ commit }) {
    commit('closeAlert')
  },
}
