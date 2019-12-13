<template>
  <div>
    <div class="card mb-4 shadow-sm">
      <div class="card-header">
        <h4 class="my-0 font-weight-normal">Joke for you:</h4>
      </div>
      <div class="card-body">
        <ul class="list-unstyled mt-3 mb-4">
          <li>{{joke}}</li>
        </ul>
        <form>
          <div class="form-group">
            <label>Example select</label>
            <select class="form-control" v-model="category">
              <option v-for="category in categories" :key="category">{{category}}</option>
            </select>
          </div>
           <button
          type="button"
          class="btn btn-lg btn-block btn-primary"
          @click="getNewJoke"
        >Get new joke</button>
        </form>
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
            category: ''
        }
    },
  computed: {
    ...mapGetters({
      joke: "randomJoke",
      categories: "jokeCategories"
    })
  },

  beforeRouteEnter(to, from, next) {
    store.dispatch("fetchRandomJoke")
    .then(() => { store.dispatch("fetchJokeCategories")})
    .then(() => { next() })
  },

  methods: {
    getNewJoke() {
      store.dispatch("fetchRandomJoke", this.category);
    }
  }
};
</script>