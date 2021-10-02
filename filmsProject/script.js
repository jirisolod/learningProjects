"use strict";

let numberOfFilms;

function start() {
    numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");
    }
}

start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false
};

function writeYourGenres() {
    for(let i = 1; i <= 3; i++) {
        const genre = prompt(`Ваш любимый жанр под номером ${i}`);
        personalMovieDB.genres[i -1] = genre;
    }
}

function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
        const a = prompt("Один из последних просмотренных фильмов?", ""),
            b = prompt("Оценка?", "");
    
        if (a != null && a != "" && b != null && a.length < 50) {
            personalMovieDB.movies[a] = b;
        } else {
            console.log("error");
            i--;
        }
    }
}

rememberMyFilms();

writeYourGenres();

function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        console.log("Просмотренно довольно мало фильмов");
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        console.log("Вы классический зритель");
    } else if (personalMovieDB.count > 30) {
        console.log("Вы киноман!");
    } else {
        console.log("error");
    }
}

detectPersonalLevel();

// function showMyDB() {
// if(personalMovieDB.private == false) {
//     console.log(personalMovieDB);
// } else {
//     console.log("DB is locked.");
// }
// }

//ANOTHER WAY

function showMyDB(hidden) {
    if(!hidden) {
        console.log(personalMovieDB);
    } else {
        console.log("DB is Hidden");
    }
}

showMyDB(personalMovieDB.private);