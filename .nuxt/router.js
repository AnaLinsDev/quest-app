import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _c999fdaa = () => interopDefault(import('..\\pages\\configQuiz.vue' /* webpackChunkName: "pages/configQuiz" */))
const _803afab6 = () => interopDefault(import('..\\pages\\login.vue' /* webpackChunkName: "pages/login" */))
const _6ac76576 = () => interopDefault(import('..\\pages\\quests.vue' /* webpackChunkName: "pages/quests" */))
const _d2db4fd2 = () => interopDefault(import('..\\pages\\register.vue' /* webpackChunkName: "pages/register" */))
const _4d9c34e6 = () => interopDefault(import('..\\pages\\userInfo.vue' /* webpackChunkName: "pages/userInfo" */))
const _138a40e4 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/quest-app/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/configQuiz",
    component: _c999fdaa,
    name: "configQuiz"
  }, {
    path: "/login",
    component: _803afab6,
    name: "login"
  }, {
    path: "/quests",
    component: _6ac76576,
    name: "quests"
  }, {
    path: "/register",
    component: _d2db4fd2,
    name: "register"
  }, {
    path: "/userInfo",
    component: _4d9c34e6,
    name: "userInfo"
  }, {
    path: "/",
    component: _138a40e4,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
