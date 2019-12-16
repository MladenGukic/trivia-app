<template>
  <div>
    <div>
      <select class="custom-select" size="10" @change="onCategoryChanged">
        <option v-for="category in categories" :key="category.id" :value="category.id">
          {{category.title}}
        </option>
      </select>
    </div>
    <div class="container" v-for="trivia in trivias" :key="trivia.id">
      <div class="card-deck mb-3 text-center">
        <div class="card mb-4 shadow-sm">
          <div class="card-header">
            <h4 class="my-0 font-weight-normal">Question</h4>
          </div>
          <div class="card-body">
            <p class="font-weight-bolder">{{trivia.question}}</p>
            <strong
              class="font-weight-bolder"
              v-if="isVisibleTriviaAnswer(trivia.id)"
            >{{trivia.answer}}</strong>
            <button
              type="button"
              class="btn btn-lg btn-block btn-outline-primary"
              @click="toggleTrivia(trivia.id)"
            >Show Answer</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import store from "./../store";
export default {
  data() {
    return {
      selectedTriviasIds: []
    };
  },
  computed: {
    ...mapGetters({
      trivias: "trivias",
      categories: "categories"
    })
  },

  created() {
    store.dispatch("fetchTrivias");
    store.dispatch("fetchCategories");
  },

  methods: {
    toggleTrivia(triviaId) {
      let triviaIdIndex = this.selectedTriviasIds.indexOf(triviaId);
      let isSelectedTriviaId = triviaIdIndex > -1;
      if (isSelectedTriviaId) {
        return this.selectedTriviasIds.splice(triviaIdIndex, 1);
      }
      this.selectedTriviasIds.push(triviaId);
    },

    isVisibleTriviaAnswer(triviaId) {
      return this.selectedTriviasIds.indexOf(triviaId) > -1;
    },

    onCategoryChanged(event) {
    store.dispatch("fetchTrivias", event.target.value);
    }
  }
};
</script>

<style>
</style>