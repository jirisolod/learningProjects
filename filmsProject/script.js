const numberOfFilms = +prompt("How many films have you watched?", "");

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const a = prompt("Last film?", ""), 
      b = prompt("Rate?", ""),
      c = prompt("Last film?", ""),
      d = prompt("Rate", "");

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);

