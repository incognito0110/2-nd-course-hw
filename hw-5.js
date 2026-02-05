// Основное задание привязка игры

const game2 = document.getElementById("mathNumber");

game2.addEventListener("click", function (event) {
    event.preventDefault();

let op = ['+', '-', '*', '/'][Math.floor(Math.random() * 4)];
let a, b, correct;

if (op === '+' || op === '-' || op === '*') {
  a = Math.floor(Math.random() * 10) + 1;
  b = Math.floor(Math.random() * 10) + 1;
  if (op === '+') correct = a + b;
  if (op === '-') correct = a - b;
  if (op === '*') correct = a * b;
} else if (op === '/') {
  correct = Math.floor(Math.random() * 10) + 1;
  b = Math.floor(Math.random() * 10) + 1;
  a = correct * b;
}

let ans = prompt(`Сколько будет ${a} ${op} ${b}?`);
if (Number(ans) === correct) {
  alert("Правильно!");
} else {
  alert(`Неправильно. Ответ: ${correct}`);
};
});

// Задание 1

// const arr = [1, 5, 4, 10, 0, 3];

// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
//     if (arr[i] === 10) {
//         break;
//     };
// };

// Задание 2

// const numb = [1, 5, 4, 10, 0, 3];
// console.log(numb.indexOf(4));

// Задание 3

// let arr = [1, 3, 5, 10, 20];
// console.log(arr.join(' '));

// Задание 4

// const arr = [];

// for (let i = 0; i < 3; i++) {
//   let row = [];
//   for (let i = 0; i < 3; i++) {
//     row.push(1);
//   }
//   arr.push(row);
// }

// console.log(arr);

// Задание 5

// const arr = [1, 1, 1];
// arr.push(2, 2, 2);
// console.log(arr);

// Задание 6

// let arr = [9, 8, 7, 'a', 6, 5];
// arr.sort();
// arr = arr.filter(item => item !== 'a');
// console.log(arr);

// Задание 7

// const arr = [9, 8, 7, 6, 5];

// const answer = Number(prompt('Угадай число'));
//   if (arr.includes(answer)) {
//     alert("Угадал!")
// } else {
//   alert("Не угадал!")
// }

// Задание 8

// let text = 'abcdef';

// const reversed = text.split('').reverse().join('');
// console.log(reversed);


// Задание 9

// const arr = [
// [1, 2, 3],
// [4, 5, 6]
// ];

// const spr = [...arr[0],...arr[1]];

// console.log(spr);

// Задание 10

// const numbers = [2, 4, 6, 10];

// for (let i = 0; i < numbers.length; i++) {
//   if (numbers[i + 1]){
//     console.log(numbers[i] + numbers[i + 1]);
//   }
// }


// Задание 11

// const numb = [2, 4, 6, 8, 10]
// const square = numb.map(numb => numb * 2)

// console.log(square);

// Задание 12

// const words = ['Ракета', 'Мир', 'Warcraft', 'Код'];

// const lengths = words.map(word => word.length);

// console.log(lengths); 

// Задание 13

// const num = [10, -2, 4, -4, 5];

// function getNegative(numbers) {
//   return numbers.filter(n => n < 0);
// }

// console.log(getNegative(num));

// Задание 14

// function randomNumber() {
//   return Math.floor(Math.random() * 10);
// }

// const arr = [];

// for (let i = 0; i < 10; i++) {
//   arr.push(randomNumber());
// }

// const evenArr = [];

// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] % 2 === 0) {
//     evenArr.push(arr[i]);
//   }
// }

// console.log(evenArr);

// Задание 15

// const arr = [];
// for (let i = 0; i < 6; i++) {
//   arr.push(Math.floor(Math.random() * 10));
// }
// console.log(arr);

// const sum = (arr.reduce((a, b) => a + b) / arr.length);

// console.log(sum);