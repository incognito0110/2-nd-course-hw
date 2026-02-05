// Основное задание привязка игры

const game1 = document.getElementById("randomNumber");

game1.addEventListener("click", function (event) {
    event.preventDefault();

    const secretNumber = Math.floor(Math.random() * 100) + 1;

    alert("Я загадал число от 1 до 100. Попробуй угадать!");

    while (true) {
        const answer = prompt("Введите число от 1 до 100:");

        if (answer === null) {
            alert("Игра отменена");
            break;
        }

        if (answer > secretNumber) {
            alert("Загаданное число меньше");
        } else if (answer < secretNumber) {
            alert("Загаданное число больше");
        } else {
            alert("Поздравляю! Вы угадали число!");
            break;
        }
    }
});


// Задание 1

// function minNumb(a, b) {
//     if (a > b) {
//         return b;
//     } else {
//         return a;
//     }
// }

// console.log(minNumb(8, 4));

// Задание 2

// function isEven (number) {
//     if (number % 2 === 0) {
//         return "Число четное"
//     } else {
//         return 'Число нечетное';
//     }
// }

// console.log(isEven(5));

// Задание 3

// function printSquare(num) {
//     console.log(num ** 2);
// }

// function getSquare(num) {
//     return num ** 2;
// }

// printSquare(5);

// const result = getSquare(5);
// console.log(result + 10);

// Задание 4


// function Check() {

//         let question = prompt("Сколько тебе лет?");
//         let age = Number(question);

//         if (isNaN(age)) {
//         alert('Вы ввели не возраст');
//         return;
//         }

//         if (age < 0) {
//             alert('Вы ввели неправильное значение');
//         } else if (age <= 12) {
//             alert("Привет, друг!");
//         } else {
//             alert("Добро пожаловать!");
//         }
// }

// Check();

// Задание 5

// function multiply(a, b) {
//   const num1 = Number(a);
//   const num2 = Number(b);

//   if (isNaN(num1) || isNaN(num2)) {
//     return 'Одно или оба значения не являются числом';
//   }

//   return num1 * num2;
// }
// console.log(multiply(2, 5));


// Задание 6

// function checkNumber() {
//     let input = prompt("Введите любое число!");
//     let num = Number(input);

//     if (isNaN(num)) {
//         return 'Переданный параметр не является числом';
//     } else {
//         return `${num} в кубе равняется ${num ** 3}`;
//     }
// }

// console.log(checkNumber());

// Задание 7

// const circle1 = {
//     radius: 3,
//     getArea() {
//       return Math.PI * this.radius ** 2;
//     },
//     getPerimeter() {
//       return 2 * Math.PI * this.radius;
//     }
//   };

//   console.log("Площадь первого круга равна", circle1.getArea());
//   console.log("Периметр первой окружности равен", circle1.getPerimeter());
  
//   const circle2 = {
//     radius: 5,
//     getArea() {
//       return Math.PI * this.radius ** 2;
//     },
//     getPerimeter() {
//       return 2 * Math.PI * this.radius;
//     }
//   };

//   console.log("Площадь второго круга равна", circle2.getArea());
//   console.log("Периметр второй окружности равен", circle2.getPerimeter());


