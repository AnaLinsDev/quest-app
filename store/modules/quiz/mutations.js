export default {

  async getConfigOptions(state, configOptions) {
    state.list_config = configOptions
	},

  async setConfig(state, config) {
    state.config = config
	},

  async povoateQuests(state, configFinal) {
    state.questsGenerated = configFinal
	}
  
}
