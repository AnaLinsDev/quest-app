export default {

  async getConfigOptions(state, configOptions) {
    state.list_config = configOptions
	},

  async setConfig(state, config) {
    state.config = config
	},

  async setProgress(state, info) {
    state.progress.right = info.right
    state.progress.wrong = info.wrong
    state.progress.total = info.total
	},

  async povoateQuests(state, configFinal) {
    state.questsGenerated = configFinal
	}
  
}
