export const CommonMenu = () => import('../..\\components\\common\\menu.vue' /* webpackChunkName: "components/common-menu" */).then(c => wrapFunctional(c.default || c))
export const CommonSideBar = () => import('../..\\components\\common\\side-bar.vue' /* webpackChunkName: "components/common-side-bar" */).then(c => wrapFunctional(c.default || c))
export const UserLoginForm = () => import('../..\\components\\user\\login-form.vue' /* webpackChunkName: "components/user-login-form" */).then(c => wrapFunctional(c.default || c))
export const UserRegisterForm = () => import('../..\\components\\user\\register-form.vue' /* webpackChunkName: "components/user-register-form" */).then(c => wrapFunctional(c.default || c))

// nuxt/nuxt.js#8607
function wrapFunctional(options) {
  if (!options || !options.functional) {
    return options
  }

  const propKeys = Array.isArray(options.props) ? options.props : Object.keys(options.props || {})

  return {
    render(h) {
      const attrs = {}
      const props = {}

      for (const key in this.$attrs) {
        if (propKeys.includes(key)) {
          props[key] = this.$attrs[key]
        } else {
          attrs[key] = this.$attrs[key]
        }
      }

      return h(options, {
        on: this.$listeners,
        attrs,
        props,
        scopedSlots: this.$scopedSlots,
      }, this.$slots.default)
    }
  }
}
