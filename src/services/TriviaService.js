import axios from 'axios';

export default class TriviaService {
    constructor() {
        axios.defaults.baseURL = 'http://jservice.io/'
    }
    
    get(triviaCategoryId) {
        return axios.get('/api/random', {params: {count: 30, category: triviaCategoryId}})
    }

    getCategories() {
        return axios.get('api/categories', {params: {count: 10}})
    }
}

export const  triviaService = new TriviaService()

