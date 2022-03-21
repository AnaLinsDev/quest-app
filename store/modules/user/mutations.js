export default {
  
	login(state, user) {
    state.name = user.name
    state.email = user.email
    state.token = user.id
    state.isGuest = false
    state.loggedIn = true
	},

  loginAsGuest(state, user) {
    state.name = user.name
    state.token = 'guestIdHolder'
    state.isGuest = true
    state.loggedIn = true
  },

  register(state, user) {
    state.name = user.name
    state.email = user.email
    state.token = user.id
    state.isGuest = false
    state.loggedIn = true
  },

  logout(state) {
    state.name = ''
    state.email = ''
    state.token = ''
    state.isGuest =  false
    state.loggedIn = false
	}
}            