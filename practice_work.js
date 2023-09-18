const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const firstMovieQuestion = prompt("Напишите название одного из последних просмотренных фильмов", ""),
    firstMovieRating = prompt("На сколько оцените его?", ""),
    secondMovieQuestion = prompt("Напишите название одного из последних просмотренных фильмов", ""),
    secondMovieRating = prompt("На сколько оцените его?", "");

personalMovieDB.movies[firstMovieQuestion] = firstMovieRating;
personalMovieDB.movies[secondMovieQuestion] = secondMovieRating;

console.log(personalMovieDB);