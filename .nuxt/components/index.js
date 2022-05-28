export { default as ChartsFinalQuestDashResult } from '../..\\components\\charts-final\\quest-dash-result.vue'
export { default as ChartsFinalQuestDashRight } from '../..\\components\\charts-final\\quest-dash-right.vue'
export { default as ChartsSchemaDoughnut } from '../..\\components\\charts-schema\\doughnut.vue'
export { default as ChartsSchemaPie } from '../..\\components\\charts-schema\\pie.vue'
export { default as UserLoginForm } from '../..\\components\\user\\login-form.vue'
export { default as UserRegisterForm } from '../..\\components\\user\\register-form.vue'
export { default as CommonAlert } from '../..\\components\\common\\alert.vue'
export { default as CommonMenu } from '../..\\components\\common\\menu.vue'
export { default as CommonSideBar } from '../..\\components\\common\\side-bar.vue'
export { default as QuestsCard } from '../..\\components\\quests\\card.vue'

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
