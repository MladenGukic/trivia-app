import Chuck from 'chucknorris-io';

class ChuckService {
    constructor() {
        this.chuck = new Chuck()
    }

    getRandomJoke(category) {
        return this.chuck.getRandomJoke(category)
    }

    getJokeCategories() {
       return this.chuck.getJokeCategories() 
    }
}

export const chuckService = new ChuckService()