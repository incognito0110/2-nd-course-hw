const game5 = document.getElementById("rockPaper");

game5.addEventListener("click", function (event) {
    event.preventDefault();

let userChoice = prompt("Выберите: камень, ножницы или бумага");

userChoice = userChoice.toLowerCase();

let options = ["камень", "ножницы", "бумага"];
let randomIndex = Math.floor(Math.random() * 3);
let computerChoice = options[randomIndex];

if (options.includes(userChoice)) {
    let result;

if (userChoice === computerChoice) {
    result = "Ничья!";
} else if (userChoice === "камень" && computerChoice === "ножницы") {
    result = "Вы победили!";
} else if (userChoice === "бумага" && computerChoice === "камень") {
    result = "Вы победили!";
} else if (userChoice === "ножницы" && computerChoice === "бумага") {
    result = "Вы победили!";
} else {
    result = "Вы проиграли!";
}

let message = 
"Твой выбор: " + userChoice + "\n" +
"Выбор компьютера: " + computerChoice + "\n" +
"Результат: " + result;

alert(message);

} else {
    alert("Вы жульничаете или ввели не те значения!")
}
});


// Задание 1

// const people = [
//    { name: 'Глеб', age: 29 },
//    { name: 'Анна', age: 17 },
//    { name: 'Олег', age: 7 },
//    { name: 'Оксана', age: 47 }
// ];

// console.log(people.sort((a, b) => a.age - b.age));

// Задание 2

// function isPositive(num) {
//   return num > 0;
// }

// function isMale(person) {
//   return person.gender === 'male';
// }

// function filter(arr, ruleFunction) {
//   const result = [];
  
//   for (let i = 0; i < arr.length; i++) {
//     if (ruleFunction(arr[i], i, arr)) {
//       result.push(arr[i]);
//     }
//   }
  
//   return result;
// }

// console.log(filter([3, -4, 1, 9], isPositive));

// const people = [
//    {name: 'Глеб', gender: 'male'},
//    {name: 'Анна', gender: 'female'},
//    {name: 'Олег', gender: 'male'},
//    {name: 'Оксана', gender: 'female'}
// ];


// console.log(filter(people, isMale));

// Задание 3

// const intervalId = setInterval(() => {
//   console.log(new Date());
// }, 3000);

// setTimeout(() => {
//   clearInterval(intervalId);
//   console.log('30 секунд прошло');
// }, 30000);

// Задание 4

// function delayForSecond(callback) {
//     setTimeout(callback, 1000);
// }

// delayForSecond(function () {
//    console.log('Привет, Глеб!');
// })


// Задание 5


// function delayForSecond(cb) {
//     setTimeout(() => {
//         console.log('Прошла одна секунда');
//         if(cb) { cb(); }
//     }, 1000)
// }

// function sayHi (name) {
//     console.log(`Привет, ${name}!`);
// }

// delayForSecond(() => sayHi('Глеб'));