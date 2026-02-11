const game3 = document.getElementById("reverseText");

game3.addEventListener("click", function (event) {
    event.preventDefault();

const userInput = prompt('Введите текст для переворота:');

if (userInput && userInput.trim() !== '') {
    const reversedText = userInput.split('').reverse().join('');
    alert('Перевернутый текст: ' + reversedText);
} else {
    alert('Вы не ввели текст!');
} 
});


const game4 = document.getElementById("Quiz");

game4.addEventListener("click", function (event) {
    event.preventDefault();

const quiz = [
  {
    question: "Какой цвет небо?",
    options: ["1. Красный", "2. Синий", "3. Зеленый"],
    correctAnswer: 2
  },
  {
    question: "Сколько дней в неделе?",
    options: ["1. Шесть", "2. Семь", "3. Восемь"],
    correctAnswer: 2
  },
  {
    question: "Сколько у человека пальцев на одной руке?",
    options: ["1. Четыре", "2. Пять", "3. Шесть"],
    correctAnswer: 2
  }
];

let correctCount = 0;

for (let i = 0; i < quiz.length; i++) {
  const question = quiz[i];
  let optionsText = question.question + "\n\n" + question.options.join("\n") + "\n\nВведите номер ответа (1, 2 или 3):";
  
  let userAnswer = prompt(optionsText);
  
  if (userAnswer !== null) {
    userAnswer = Number(userAnswer);
    
    if (!isNaN(userAnswer) && userAnswer === question.correctAnswer) {
      correctCount++;
    }
  }
}

alert(`Количество правильных ответов: ${correctCount} из ${quiz.length}`);
});

// Задание 1

// let str = 'js';
// let upperStr = str.toUpperCase();
// console.log(upperStr);

// Задание 2

// function filterByPrefix(strings, prefix) {
//   const lowerPrefix = prefix.toLowerCase();

//   return strings.filter(str => 

//     str.toLowerCase().startsWith(lowerPrefix)
//   );
// }

// const Words = ['Москва', 'мост', 'Медведь', 'Санкт-Петербург'];
// console.log(filterByPrefix(Words, 'мо'));

// Задание 3

// const Numb = 32.58884;

// // Округление до меньшего целого
// const floorResult = Math.floor(Numb);
// console.log(floorResult);

// // Округление до большего целого
// const ceilResult = Math.ceil(Numb);
// console.log(ceilResult);

// // Округление до ближайшего целого
// const roundResult = Math.round(Numb);
// console.log(roundResult);

// Задание 4

// const minValue = Math.min(52, 53, 49, 77, 21, 32);
// console.log(minValue);

// const maxValue = Math.max(52, 53, 49, 77, 21, 32);
// console.log(maxValue);

// Задание 5

// function getRandomNumber() {
//   const randomNumber = Math.floor(Math.random() * 10) + 1;
//   console.log(randomNumber);
// }

// getRandomNumber();

// Задание 6

// function getRandomArray(n) {

//   const length = Math.floor(n / 2);
  
//   const result = [];
  
//   for (let i = 0; i < length; i++) {
//     const randomNum = Math.floor(Math.random() * (n + 1));
//     result.push(randomNum);
//   }
  
//   return result;
// }

// console.log(getRandomArray(8));

// Задание 7

// function numbers(min, max) {
//     return Math.floor(Math.random() * (max - min + 1)) + min
// }
// console.log(numbers(2, 5));

// Задание 8

// let nowDate = new Date();
// console.log(nowDate.toLocaleDateString('ru-RU'));


// Задание 9

// const currentDate = new Date(2026, 1, 12);
// currentDate.setDate(currentDate.getDate() + 73);
// console.log(currentDate.toLocaleDateString('ru-RU'));

// Задание 10

// function formatDate(date) {
//     const daysOfWeek = ['воскресенье', 'понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота'];
//     const months = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'];
    
//     // Если передана строка, преобразуем в объект Date
//     if (typeof date === 'string') {
//         date = new Date(date);
//     }
    
//     const day = date.getDate();
//     const month = date.getMonth();
//     const year = date.getFullYear();
//     const dayOfWeek = date.getDay();
//     const hours = String(date.getHours()).padStart(2, '0');
//     const minutes = String(date.getMinutes()).padStart(2, '0');
//     const seconds = String(date.getSeconds()).padStart(2, '0');
    
//     return `Дата: ${day} ${months[month]} ${year} — это ${daysOfWeek[dayOfWeek]}.\nВремя: ${hours}:${minutes}:${seconds}`;
// }


// const currentDate = new Date();
// console.log(formatDate(currentDate));