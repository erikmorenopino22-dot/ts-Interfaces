"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const director1 = {
    name: "Peter Jackson",
    age: 60,
    data: "He is Amazing"
};
class Movie {
    title;
    duration;
    hasOscar;
    director;
    constructor(title, duration, hasOscar, director) {
        this.title = title;
        this.duration = duration;
        this.hasOscar = hasOscar;
        this.director = director;
    }
    getInfo() {
        return `title: ${this.title} - Duration: ${this.duration} - Has Oscar: ${this.hasOscar}`;
    }
    play() {
        console.log("playing");
    }
}
class Horrormovie extends Movie {
    hasJumpScares;
    constructor(title, duration, hasOscar, director, hasJumpScares) {
        super(title, duration, hasOscar, director);
        this.hasJumpScares = hasJumpScares;
    }
    displayAlert() {
        console.log("this movie is really scary");
    }
}
const movie1 = new Movie("El señor de los anillos", 300, true, director1);
const movie2 = new Movie("Harry Potter", 120, true, director1);
console.log(movie1, movie2);
console.log(movie1.getInfo);
class Series {
    title;
    duration;
    director;
    episodes;
    constructor(title, duration, director, episodes) {
        this.title = title;
        this.duration = duration;
        this.director = director;
        this.episodes = episodes;
    }
    play() {
        return console.log("Buenas");
    }
}
//# sourceMappingURL=main.js.map