"use script";

// const result = confirm("You gay?");
// console.log(result);

// let answer = +prompt("Есть 18 лет?", "");
// console.log(typeof (answer + 5));

// let answers = [];

// answers[0] = prompt("what is your name?");
// answers[1] = prompt("how old are you ");
// answers[2] = prompt("Where do you live");
// console.log(typeof answers);

// document.write(`Данные человека   ${answers}`);

// let icncr = 10,
//   decr = 10;

// ++icncr;
// --decr;

// console.log(icncr++);
// console.log(decr--);

// let numberOfFilms = prompt("Сколько вы фильмов смотрели", " ");
// let lastMovie = prompt("Один из последних просмотренных фильмов?", " ");
// let manyStar = prompt("На сколько оцените его", " ");

// let personalMovieDB = {
//   count: numberOfFilms,
//   movies: {},
//   actors: {},
//   genres: [],
//   privat: false,
// };
// personalMovieDB.movies[lastMovie] = manyStar;
// console.log(personalMovieDB);
// console.log(NaN || 2 || undefined);
// console.log(NaN && 2 && undefined);
// console.log(1 && 2 && 3);
// console.log((!1 && 2) || !3);
// console.log(25 || (null && !3));
// console.log(NaN || null || !3 || undefined || 5);
// console.log(NaN || (null && !3 && undefined) || 5);
// console.log((5 === 5 && 3 > 1) || 5);

// let num = 5;

// do {
//   console.log(num);
//   num++;
// } while (num < 10);

// for (i = 0; i < 5; i++) {
//   console.log(i);
// }

// for (let i = 2; i <= 10; i++) {
//   if (i % 2 == 0) {
//     console.log(i);
//   }
// }

// let i = 2;
// while (i <= 16) {
//   i++;
//   if (i % 2 === 0) {
//     continue;
//   } else {
//     console.log(i);
//   }
// }

// const arrayOfNumbers = [];

// for (i = 5; i < 11; i++) {
//   arrayOfNumbers[i - 5] = i;
// }
// console.log(arrayOfNumbers);

// const lines = 5;
// let result = '';

// for (let i = 0; i <= lines; i++) {
//     for (let j = 0; j < lines - i; j++) {
//         result += " ";
//     }
//     for (let j = 0; j < 2 * i + 1; j++) {
//         result += "*";
//     }
//     result += "\n";
// }

// console.log(result)

// let numberOfFilms = prompt("Сколько вы фильмов смотрели", " ");
// let lastMovie = prompt("Один из последних просмотренных фильмов?", " ");
// let manyStar = prompt("На сколько оцените его", " ");

// let personalMovieDB = {
//   count: numberOfFilms,
//   movies: {},
//   actors: {},
//   genres: [],
//   privat: false,
// };
// personalMovieDB.movies[lastMovie] = manyStar;
// console.log(personalMovieDB);

// const numberOfFilms = +prompt("Сколько вы фильмов смотрели", " ");

// let personalMovieDB = {
//   count: numberOfFilms,
//   movies: {},
//   actors: {},
//   genres: [],
//   privat: false,
// };

// const a = prompt("Один из последних просмотренных фильмов?", " "),
//   b = prompt("На сколько оцените его", " "),
//   c = prompt("Один из последних просмотренных фильмов?", " "),
//   d = prompt("На сколько оцените его", " ");

// personalMovieDB.movies[a] = b;
// personalMovieDB.movies[c] = d;

// console.log(personalMovieDB);

// function zarplata(a,b,c){
// return (a*b)*c;
// }
// document.getElementById("zp").innerHTML=zarplata(10,170,30) + " "+ "руб";



let resultBtn = document.querySelector(".calc_zp-btn");

function zarplata() {
let calcInput_1 = document.querySelector("#calc-inp_1").value;
let calcInput_2 = document.querySelector("#calc-inp_2").value;
let calcInput_3 = document.querySelector("#calc-inp_3").value;

let result=(calcInput_1*calcInput_2)*calcInput_3 ;
document.querySelector(".calc_zp-result").innerHTML= result + " " + "руб"
}
resultBtn.addEventListener("click", zarplata);
