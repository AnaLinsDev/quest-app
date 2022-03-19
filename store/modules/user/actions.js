export default {
  login(context, user) {
			context.commit('login', user)
	},

  loginAsGuest(context, user) {
			context.commit('loginAsGuest', user)
	},

  register(context, user) {
    context.commit('register', user)
  },

  logout(context) {
			context.commit('logout')
	}
}