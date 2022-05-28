import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _a4f3db9c = () => interopDefault(import('..\\pages\\configQuiz.vue' /* webpackChunkName: "pages/configQuiz" */))
const _5797f069 = () => interopDefault(import('..\\pages\\dashboard.vue' /* webpackChunkName: "pages/dashboard" */))
const _2a1815a9 = () => interopDefault(import('..\\pages\\history.vue' /* webpackChunkName: "pages/history" */))
const _350ca93e = () => interopDefault(import('..\\pages\\login.vue' /* webpackChunkName: "pages/login" */))
const _0a920c68 = () => interopDefault(import('..\\pages\\quests.vue' /* webpackChunkName: "pages/quests" */))
const _2ab3fede = () => interopDefault(import('..\\pages\\register.vue' /* webpackChunkName: "pages/register" */))
const _6d538c54 = () => interopDefault(import('..\\pages\\userInfo.vue' /* webpackChunkName: "pages/userInfo" */))

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
    component: _a4f3db9c,
    name: "configQuiz"
  }, {
    path: "/dashboard",
    component: _5797f069,
    name: "dashboard"
  }, {
    path: "/history",
    component: _2a1815a9,
    name: "history"
  }, {
    path: "/login",
    component: _350ca93e,
    name: "login"
  }, {
    path: "/quests",
    component: _0a920c68,
    name: "quests"
  }, {
    path: "/register",
    component: _2ab3fede,
    name: "register"
  }, {
    path: "/userInfo",
    component: _6d538c54,
    name: "userInfo"
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
