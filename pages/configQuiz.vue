<template>
  <div class="d-flex-column geral">
    <div class="form-quiz-config mx-auto mt-12">
      <div class="card-quiz-config pa-10">
        <h1 class="center">Configuration Quiz</h1>
        <v-divider class="my-2"></v-divider>
        <v-container class="pt-6">
          <v-row align="center">

            <v-col class="d-flex" cols="12" sm="6">
              <v-select
                :items="configOptions['amount']"
                v-model="amount"
                outlined
                rounded
                label="Amount"
              ></v-select>
            </v-col>

            <v-col class="d-flex" cols="12" sm="6">
              <v-select
                :items="Object.keys(configOptions['category'])"
                v-model="category"
                outlined
                rounded
                label="Category"
              ></v-select>
            </v-col>

            <v-col class="d-flex" cols="12" sm="6">
              <v-select
                :items="Object.keys(configOptions['type'])"
                v-model="type"
                outlined
                rounded
                label="Type"
              ></v-select>
            </v-col>

            <v-col class="d-flex" cols="12" sm="6">
              <v-select
                :items="Object.keys(configOptions['difficulty'])"
                v-model="difficulty"
                outlined
                rounded
                label="Difficulty"
              ></v-select>
            </v-col>
            
          </v-row>
        </v-container>
        <div class="d-flex justify-center mb-3">
          <v-btn @click="generateQuestions" large rounded color="blue">
            <v-icon left color="white"> mdi-creation </v-icon>
            Generate
          </v-btn>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  data() {
    return {
      amount: 5,
      type: "Any",
      difficulty: "Any",
      category: "Any",
    };
  },

  computed: {
    ...mapState("quiz", {
      config: (state) => state.config,
      configOptions: (state) => state.quest_config,
    }),
  },

  methods: {
    ...mapActions("quiz", ["setConfig", "povoateQuests"]),

    async generateQuestions() {
      await this.povoateQuests({
        amount: this.amount,
        difficulty: this.difficulty,
        category: this.configOptions['category'][this.category],
        type: this.type,
      });
      this.$router.push("/quests");
    },
  },
};
</script>

<style>
.center {
  text-align: center;
}
.black {
  color: black;
}

.form-quiz-config {
  display: flex;
  justify-content: center;
}

.geral {
  justify-content: center;
}

.card-quiz-config {
  height: auto;
  max-width: 600px;
  background-color: white;
  border: 1px solid black;
}
</style>
