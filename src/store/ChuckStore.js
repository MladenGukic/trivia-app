import { chuckService } from './../services/ChuckService'

export const ChuckStoreModule = {
    state: {
        randomJoke: {}
    },

    mutations: {
        setRandomJoke(state, joke) {
            state.randomJoke = joke
        }
    },

    actions: {
        fetchRandomJoke(context) {
            chuckService.getRandomJoke()
                .then(r => { context.commit('setRandomJoke', r.value) })
        }
    },

    getters: {
        randomJoke(state) {
            return state.randomJoke
        }
    }
}
