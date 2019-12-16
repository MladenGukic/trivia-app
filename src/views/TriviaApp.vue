<template>
  <div>
    <div>
      <select class="custom-select" size="10" @change="onCategoryChanged">
        <option v-for="category in categories" :key="category.id" :value="category.id">
          {{category.title}}
        </option>
      </select>
       <input type="text" class="form-control mb-3" placeholder="Filter Trivias" v-model="filterTriviaTerm"/>
    </div>
    <div class="container" v-for="trivia in currentlyVisibleTrivias" :key="trivia.id">
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
    <paginator-app :number-of-pages="numberOfPages" :current-page="currentPage" @selected-page="setCurrentPage" />
  </div>
</template>

<script>
import PaginatorApp from './PaginatorApp'
import { mapGetters } from "vuex";
import store from "./../store";
export default {
  components: {
    PaginatorApp
  },
  data() {
    return {
      selectedTriviasIds: [],
      filterTriviaTerm: '',
      currentPage: 1
    };
  },
  computed: {
    ...mapGetters({
      trivias: "trivias",
      categories: "categories"
    }),

    filteredTrivias() {
      return this.trivias.filter((trivia) => {
        return trivia.question.toLowerCase()
          .indexOf(this.filterTriviaTerm.toLowerCase()) > -1;
      })
    },

    currentlyVisibleTrivias() {
      let bottomLimit = (this.currentPage - 1) * 5;
      let topLimit = bottomLimit + 5;
      return this.filteredTrivias.filter((trivia, index) => {
        return index >= bottomLimit && index < topLimit;
      })
    },

     numberOfPages() {
      return Math.ceil(this.filteredTrivias.length / 5);
    }
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
    },

    setCurrentPage(page) {
      this.currentPage = page;
    }
  }
};
</script>

<style>
</style>