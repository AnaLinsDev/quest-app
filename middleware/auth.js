export default function ({ store, redirect, route }) {

    // não logado, nao está na tela login nem na tela de registro
    if (!store.state.user.loggedIn && 
      ( route.name != 'login' && route.name != 'register')) {
      return redirect('/login')
    }

    // logado, e está na tela de login e de registro
    if (store.state.user.loggedIn && 
      (route.name == 'login' && route.name == 'register')) {
      return redirect('/configQuiz')
    }
}