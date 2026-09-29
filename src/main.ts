interface Director<T>{
    name: string;
    age: number;
    data: T;
}

const director1:Director<string>={
    name: "Peter Jackson",
    age: 60, 
    data: "He is Amazing"
}

interface IVideo<T> {
    title: string;
    director: Director<T>;
    play(): void;
} 

class Movie implements IVideo<string>{
    constructor(public title: string, 
        private duration: number, 
        readonly hasOscar: boolean,
    public director: Director<string>){}

    getInfo(){
        return `title: ${this.title} - Duration: ${this.duration} - Has Oscar: ${this.hasOscar}`;
    }
    play(){
        console.log("playing");
    }
}

class Horrormovie extends Movie {
    constructor(
        title: string, 
        duration: number,
        hasOscar: boolean, 
        director: Director<string>,
        public hasJumpScares: boolean
    ) {
        super(title, duration, hasOscar, director );
    }
    displayAlert(){
        console.log("this movie is really scary");
    }
}

const movie1 = new Movie("El señor de los anillos", 300, true, director1);
const movie2 = new Movie("Harry Potter", 120, true, director1);

console.log(movie1, movie2);
console.log(movie1.getInfo);

interface IEpisodic{
    episodes: number;
}

class Series implements IVideo<string>, IEpisodic{
    constructor(
        public title: string,
        private duration: number, 
        public director: Director<string>,
        public episodes: number
    ){}
    play(){
        return console.log("Buenas");
    }
}