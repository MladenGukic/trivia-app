import { chuckService } from './../services/ChuckService'

export const ChuckStoreModule = {
    state: {
        randomJoke: {},
        jokeCategories: []
    },

    mutations: {
        setRandomJoke(state, joke) {
            state.randomJoke = joke
        },

        setJokeCategories(state, categories) {
            state.jokeCategories = categories
        }
    },

    actions: {
        fetchRandomJoke(context, category = '') {
           return chuckService.getRandomJoke(category)
                .then(r => { context.commit('setRandomJoke', r.value) })
        },

        fetchJokeCategories(context) {
            return chuckService.getJokeCategories()
            .then(r => { context.commit('setJokeCategories', r) })
        }
    },

    getters: {
        randomJoke(state) {
            return state.randomJoke
        },

        jokeCategories(state) {
            return state.jokeCategories
        }
    }
}
