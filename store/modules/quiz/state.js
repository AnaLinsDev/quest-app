export default () => ({
  isUserConfig: false,
  questsGenerated: [],
  
  progress:{right: 0, wrong: 0, pass: 0, total: 0},

  list_config: [
    [  []  ,  []  ]   ,   [  []  ,  []  ],
    [  []  ,  []  ]   ,   [  []  ,  []  ]
  ],

  config:{
    amount:10,
    category:"Any",
    difficulty:"Any",
    type:"Any"
  }

})