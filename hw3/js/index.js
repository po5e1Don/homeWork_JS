//task #1

// let userNumber = Number(prompt("Введите Ваше число"));
// if (userNumber === 10) console.log(`Вы ввели ${userNumber}.Это число равно 10`);
// else if (userNumber < 10)
//   console.log(`Вы ввели ${userNumber}.Это число меньше 10`);
// else if (userNumber > 10)
//   console.log(`Вы ввели ${userNumber}.Это число больше 10`);
// else console.log("Это не число! Введите число!");

//task #2

//method #1
// let age = Number(prompt("Введите Ваш возраст"));
// if (age >= 18) console.log("Добро пожаловать!");
// else console.log("Молодой человек, Вы еще слишком юны");
//method #2
// let userAge = Number(prompt("Введите Ваш возраст"));
// userAge >= 18
//   ? console.log("Добро пожаловать")
//   : console.log("Молодой человек, Вы еще слишком юны!");

//task #3
// let userNumber1 = Number(prompt("Введите первое число"));
// let userNumber2 = Number(prompt("Введите второе число"));
// let userNumber3 = Number(prompt("Введите третье число"));
// if (userNumber1 > userNumber2 && userNumber1 > userNumber3) {
//   console.log(`${userNumber1} Больше из всех трёх цифр`);
// } else if (userNumber2 > userNumber1 && userNumber2 > userNumber3) {
//   console.log(`${userNumber2} Больше из всех трёх цифр`);
// } else if (userNumber3 > userNumber1 && userNumber3 > 2) {
//   console.log(`${userNumber3} Больше из всех трёх цифр`);
// } else {
//   console.log("Это не цифра! ");
// }

//task #4
// let enterLogin = prompt("Enter your login");
// switch (enterLogin) {
//   case "login":
//     let enterPassword = prompt("Enter your password");
//     {
//       switch (enterPassword) {
//         case "password":
//           alert("Congratulation");
//           break;
//         default:
//           alert("Password error");
//       }
//     }
//     break;
//   default:
//     alert("User not found");
//     break;
// }

//task #5
// let enterOldPass = prompt("Введите Ваш старый пароль");
// let oldPassword = enterOldPass;
// if (enterOldPass === oldPassword) {
//   let enterNewPass = prompt("Введите новый пароль");
//   if (enterNewPass !== oldPassword) {
//     let repiteNewpass = prompt("Повторите ввод нового пароля");
//     if (repiteNewpass === enterNewPass) {
//       console.log("Пароль успешно изменен!");
//     } else {
//       console.log("Ошибка повторного ввода пароля. Пароли не совпадают.");
//     }
//   } else {
//     console.log(
//       "Пароль не должен быть такой же как старый. Придумайте другой пароль"
//     );
//   }
// } else {
//   console.log("Пароль неверный");
// }

//task #6
// let valute1 = "USD";
// let valute2 = "EUR";
// let whatIsValute = prompt("Укажите интересующую Вас валюту (USD/EUR)");

// switch (whatIsValute.toUpperCase()) {
//   case valute1:
//     let uahToUsd = Number(prompt("Сколько гривен вы хотите обменять?"));
//     let result1 = uahToUsd / 8;
//     alert(`Это будет ${result1.toFixed(2)} януковичей`);
//     break;
//   case valute2:
//     let uahToEur = Number(prompt("Сколько гривен вы хотите обменять?"));
//     let result2 = uahToEur / 10;
//     alert(`Это будет ${result2.toFixed(2)} азаровых`);
//     break;

//   default:
//     alert("Такой валюты не существует");
//     break;
// }

//HARD lvl

//task #1
// let firstNumber = Number(prompt("Введите первое число"));
// let secondNumber = Number(prompt("Введите второе число"));
// let operation = firstNumber * secondNumber;
// let question = Number(
//   prompt(`Сколько будет ${firstNumber} умноженное на ${secondNumber} ?`)
// );
// if (question === operation) {
//   console.log("Молодец!");
// } else {
//   alert(`Ты не прав! правильный ответ - ${operation}`);
// }
// console.log(operation);

//task #2
// let userAnswer = Number(
//   prompt("Сделайте Ваш выбор где 1 - Камень, 2 - Ножницы, 3 - Бумага")
// );
// let computerAnswer = Math.ceil(Math.random() * 3);
// console.log(`Компьютер выбрал ${computerAnswer}`);
// if (
//   (userAnswer === 1 && computerAnswer > 1) ||
//   (userAnswer === 2 && computerAnswer === 3)
// ) {
//   console.log("You WIN!");
// } else if (
//   (userAnswer === 3 && computerAnswer < 3) ||
//   (userAnswer === 2 && computerAnswer === 1)
// ) {
//   console.log("You DIED");
// } else {
//   console.log("Ничья!");
// }
