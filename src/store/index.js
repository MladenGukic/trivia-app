import Vue from 'vue'
import Vuex from 'vuex'
import { TriviaStoreModule } from './TriviaStore'
import { ChuckStoreModule } from './ChuckStore'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    TriviaStoreModule,
    ChuckStoreModule
  }
})
