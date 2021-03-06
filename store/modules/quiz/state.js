export default () => ({
  isUserConfig: false,
  questsGenerated: [],
  
  progress:{},

  quest_config: {
    amount: [
      5,
      10,
      15,
      20,
      25,
      30
    ],
    category: {
      Any: 0,
      Art: 25,
      Books: 10,
      Film: 11,
      Music: 12,
      "Video Game": 15
    },
    difficulty: {
      Any: 0,
      Easy: "easy",
      Medium: "medium",
      Hard: "hard"
    },
    type: {
      Any: 0,
      "Multiple Choice": "multiple",
      "True or False": "boolean"
    }
  },

  config:{
    amount:10,
    category:"Any",
    difficulty:"Any",
    type:"Any"
  }

})