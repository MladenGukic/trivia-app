import { triviaService } from './../services/TriviaService'

export const TriviaStoreModule = {
    state: {
        trivias: [],
        triviaCategories: []
    },

    mutations: {
        setTrivias(state, trivias) {
            state.trivias = trivias
        },

        setCategories(state, categories) {
            state.triviaCategories = categories
        }
    },
    actions: {
        fetchTrivias(context, category) {
            return triviaService.get(category)
            .then(r => {context.commit('setTrivias',r.data)})
        },

        fetchCategories(context) {
            return triviaService.getCategories()
            .then(r => { context.commit('setCategories', r.data)})
        }
    },

    getters: {
        trivias(state) {
            return state.trivias
        },

        categories(state) {
            return state.triviaCategories
        }
    }
}