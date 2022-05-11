import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _0d8bdc7c = () => interopDefault(import('..\\pages\\configQuiz.vue' /* webpackChunkName: "pages/configQuiz" */))
const _a6c4824e = () => interopDefault(import('..\\pages\\dashboard.vue' /* webpackChunkName: "pages/dashboard" */))
const _cac9a0a4 = () => interopDefault(import('..\\pages\\login.vue' /* webpackChunkName: "pages/login" */))
const _46f9415c = () => interopDefault(import('..\\pages\\quests.vue' /* webpackChunkName: "pages/quests" */))
const _6f82a26e = () => interopDefault(import('..\\pages\\register.vue' /* webpackChunkName: "pages/register" */))
const _9bbba038 = () => interopDefault(import('..\\pages\\userInfo.vue' /* webpackChunkName: "pages/userInfo" */))
const _5e18e6d2 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

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
    component: _0d8bdc7c,
    name: "configQuiz"
  }, {
    path: "/dashboard",
    component: _a6c4824e,
    name: "dashboard"
  }, {
    path: "/login",
    component: _cac9a0a4,
    name: "login"
  }, {
    path: "/quests",
    component: _46f9415c,
    name: "quests"
  }, {
    path: "/register",
    component: _6f82a26e,
    name: "register"
  }, {
    path: "/userInfo",
    component: _9bbba038,
    name: "userInfo"
  }, {
    path: "/",
    component: _5e18e6d2,
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
