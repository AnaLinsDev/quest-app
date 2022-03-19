export default function ({ store, redirect, route }) {

    if (!store.state.user.loggedIn && route.name != 'login') {
      return redirect('/login')
    }

    if (store.state.user.loggedIn && route.name == 'login') {
      return redirect('/configQuiz')
    }
}