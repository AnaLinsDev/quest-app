export default {
  
	login(state, user) {
    // fazer req backend para auth
    state.name = user.name
    state.isGuest = false
    state.loggedIn = true
	},

  loginAsGuest(state, user) {
    state.name = user.name
    state.isGuest = true
    state.loggedIn = true
  },

  register(state, user) {
    // fazer req backend para register
    context.commit('register', user)
  },

  logout(state) {
    state.name = ''
    state.isGuest =  false
    state.loggedIn = false
	}
}            