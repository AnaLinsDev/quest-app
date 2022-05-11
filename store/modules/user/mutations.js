export default {
  
	login(state, user) {
    console.log(user)
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
	},

  alert(state, info) {
    state.alert_message = info.message
    state.alert_type = info.type
  },

  closeAlert(state) {
    state.alert_message = ''
    state.alert_type = ''
  }
}            