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
        <button type="button" class="btn btn-lg btn-block btn-primary" @click="getNewJoke">Get new joke</button>
      </div>
    </div>
    </div>
</template>
<script>
import { mapGetters } from 'vuex'
import  store  from './../store'
export default {
    computed: {
        ...mapGetters({
            joke: 'randomJoke'
        })
    },

    beforeRouteEnter(to,from,next) {
        store.dispatch('fetchRandomJoke')
        .then(() => { next() })
    },

    methods: {
        getNewJoke() {
            store.dispatch('fetchRandomJoke')
        }
    }
    
}   
</script>