// // assign: evaluation
// var a = 5;
// var b, c;
// b = (a * 5);
// b = c = (b/2);

// // Number: age

// let age = Number(prompt("Сколько Вам лет"));
// var today = new Date();
// var year = today.getFullYear();
// let calc = year - age;
// alert(calc);

// // Number: temperature

// let temperature = prompt("Цельсий или Фаренгейт?");
// let question = +prompt("Сколько?");
// if (temperature === "Цельсий") {
//   let formulaCtoF = (question * 9) / 5 + 32;
//   alert(formulaCtoF);
// }
// if (temperature === "Фаренгейт") {
//   let formulaFtoC = (question - 32) * (5 / 9);
//   alert(formulaFtoC);
// }

// //Number: divide

// let firstNumber = +prompt ("Enter first number")
// let secondNumber = +prompt ("Enter second number")
// let result = Math.floor (firstNumber/secondNumber)
// console.log(result)

////Number: odd

// let userNumber = Number(prompt("Введите число"));
// if ((userNumber %= 2)) {
//   console.log("Введенное число нечетное");
// } else {
//   console.log("Введённое число четное");
// }

// //String: greeting

// let userName = prompt("Как Вас зовут?");
// alert(`Приветствую, ${userName}`);

////String: lexics;
// let $_question = prompt("Продолжите фразу - 'Пошел на ... ' ");
// if ($_question.includes("хуй")) {
//   console.log("Сам пошел нахуй");
// }

// let str = prompt("Enter string");
// console.log(str);
// console.log(str.indexOf("r"));

// // Boolean and Boolean: if
// let question1 = confirm("Вы хотите продолжить?");
// answ1 = question1;
// let question2 = confirm("Вы уверены?");
// answ2 = question2;
// if (answ1 === true) {
//   if (answ2 === true) {
//     confirm("Вы точно уверены?");
//     alert("Вы как-то не уверенно нажимаете.Всего доброго!");
//   } else {
//     alert("Я так и знал что Вы не уверенны!");
//   }
// } else {
//   alert("А зря!");
// }

////Array: booleans
// let arr = [question1, question2];
// console.log(arr);

////Array: plus
// let arr = [25, 50];
// arr[2] = arr[0] + arr[1];
// console.log(arr);

////Array: plus string
// let arrString = ["x", "у", "й"];
// arrString[3] = arrString[0] + arrString[1] + arrString[2];
// console.log(arrString);

////Object: real
// let doll = {
//   body: {
//     head: 1,
//     hand: 2,
//     leg: 2,
//   },
//   head: [
//     {
//       eyes: {
//         rightEye: 1,
//         leftEye: 1,
//         colorEyes: "blue",
//       },
//       nose: 1,
//       mouth: 1,
//       ears: {
//         rightEars: 1,
//         leftEars: 1,
//       },
//     },
//   ],
//   hand: {
//     rightHand: 1,
//     leftHand: 1,
//     fingersRightHand: 5,
//     fingersLeftHand: 5,
//   },
//   leg: {
//     rightLeg: 1,
//     letftLeg: 1,
//     fingersRightLeg: 5,
//     fingersLeftLeg: 5,
//   },
// };
// console.log(doll);

////Object: change
// doll.body.head = 2; //Как говорится - "Одна голова хорошо, а две - некрасиво."
// console.log(doll);

////Comparison if
// var age = +prompt("Сколько вам лет?", "");
// if (age < 0) {
//   alert("Введено отрицательное значение");
// } else if (age < 18) {
//   alert("школьник");
// } else if (age > 18 && age < 30) {
//   alert("молодеж");
// } else if (age > 30 && age < 45) {
//   alert("зрелость");
// } else if (age > 45 && age < 60) {
//   alert("закат");
// } else if (age > 60) {
//   alert("как пенсия?");
// } else {
//   alert("то ли киборг, то ли ошибка");
// }

////Comparison: sizes
// let userData = +prompt("Какой размер Вы хотите сконвертировать в USA размер? ");
// if (userData === 40) {
//   console.log("Это размер S");
// } else if (userData === 42 || 44) {
//   console.log("Это размер М");
// } else if (userData === 46 || 48) {
//   console.log("Это размер L");
// } else if (userData === 50 || 52) {
//   console.log("Это размер XL");
// } else if (userData === 54) {
//   console.log("Это размер XXL");
// }

////Ternary
// let userAnswer = confirm("Вы женщина?")
//   ? alert("Вы женщина")
//   : alert("Вы мужчина");

////Number: flats
// let skolkoEtazhey = +prompt("skolko etazhei v hate?");
// let skolkoHatNaEtazhe = +prompt("skolko kvartir na odnom etazhe?");
// let kakuyuHatyNadoNaiti = +prompt("kakuyu kvartiry nado vuchislit?");
// let padik = kakuyuHatyNadoNaiti / (skolkoEtazhey * skolkoHatNaEtazhe);
// let etazh = skolkoEtazhey / Math.ceil(padik);
// console.log(
//   `hata nahoditsa v ${Math.ceil(padik.toFixed(1))} paradnom na ${etazh.toFixed(
//     0
//   )} etazhe`
// );
