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
// let enterOldPass = prompt("Введите старый пароль");
// let oldPassword = "password";
// if (enterOldPass === oldPassword) {
//   let enterNewPass = prompt("введите новый пароль");
//   if (enterNewPass !== oldPassword) {
//     let repiteNewpass = prompt("повторите ввод нового пароля");
//     if (repiteNewpass === enterNewPass) {
//       console.log("Пароль успешно изменен!");
//     } else {
//       console.log("Пароли не совпадают.");
//     }
//   } else {
//     console.log(
//       "Пароль не должен быть такой же как старый. Придумайте другой пароль"
//     );
//   }
// } else {
//   console.log("Пароль неверный");
// }
