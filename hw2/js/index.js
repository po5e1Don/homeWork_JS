//Task#1

console.log(1 == 2);
console.log(1 != 2);
console.log(1 == 1);
console.log("text" == 5);
console.log("text" == "Text");
console.log("text" == "text");
console.log(true == "true");
console.log(true == false);
console.log(false == 0);
console.log(false === 0);
console.log("" == false);
console.log("" !== false);
console.log(undefined === null);
console.log(undefined == null);
console.log(17 === true);
console.log("17" === true);
console.log({} === {});

//Task#2-3
let enterNumber = prompt("Введите число");

if (enterNumber % 2 == 0) {
  alert(`Число ${enterNumber} четное`);
} else {
  alert(`Число ${enterNumber} нечетное`);
}

//Task#4
let threeShortOperator = 10;
threeShortOperator -= 5;
console.log(threeShortOperator);
threeShortOperator *= 2;
console.log(threeShortOperator);
threeShortOperator += 5;
console.log(threeShortOperator);

//Task#5
let a = "100";
a = Number(a);
console.log(typeof a);
a = a;
console.log(typeof a);
a = --a;
console.log(typeof ++a);

//Task#6
let firstNumber = +prompt("Enter first number");
let secondNumber = +prompt("Enter second number");
alert(firstNumber ** 2 - secondNumber ** 2);

//HARD lvl #1
let giveMeFirstNumber = +prompt("Enter your first number");
let giveMeSecondNumber = +prompt("Enter your second number");
let giveMeThirdNumber = +prompt("Enter your third number");
let result =
  giveMeFirstNumber + 10 + giveMeSecondNumber + 10 + giveMeThirdNumber + 10;
alert(result);

//HARD lvl #2
let sideA = +prompt("Enter sideA");
let sideB = +prompt("Enter sideB");
let sideC = +prompt("Enter sideC");
let resultFormula =
  (sideA + sideB > sideC == sideB + sideC > sideA) == sideA + sideC > sideB;
if (resultFormula == true) alert("Треугольник существует");
if (resultFormula == false) alert("Треугольник не существует");
