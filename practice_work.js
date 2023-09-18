let numberOfFilms = prompt("Сколько фильмов вы уже посмотрели?", "");

let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

let firstMovieQuestion = prompt("Напишите название одного из последних просмотренных фильмов");
let firstMovieRating = prompt("На сколько оцените его?");
let secondMovieQuestion = prompt("Напишите название одного из последних просмотренных фильмов");
let secondMovieRating = prompt("На сколько оцените его?");

let movies = {
    firstMovieQuestion: firstMovieRating,
    secondMovieQuestion: secondMovieRating
};
console.log(movies);