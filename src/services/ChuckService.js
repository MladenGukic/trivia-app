import Chuck from 'chucknorris-io';

class ChuckService {
    constructor() {
        this.chuck = new Chuck()
    }
    getRandomJoke() {
        return this.chuck.getRandomJoke()
    }
}

export const chuckService = new ChuckService()