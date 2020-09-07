var product1 = "pepperoni";
var product2 = "mozzarella";
var sizeS = 32;
var sizeM = 42;
var sizeXXL = 52;
var caloriesPepperoniS = 1000;
var caloriesPepperoniM = 1200;
var caloriesPepperoniXXL = 1400;
var caloriesMozzarellaS = 500;
var caloriesMozzarellaM = 600;
var caloriesMozzarellaXXL = 700;

var answer1 = prompt(
  "Какую пиццу вы хотите? У нас есть Pepperoni и Mozzarella"
);

if (product1 === answer1.toLowerCase()) {
  var answer2 = prompt(
    "Вы выбрали Pepperoni. Теперь выберите размер  - 32,42,52?"
  );
  var count = prompt("Отлично! Cколько штук Вы хотите заказать?");
  if (answer2 === "32") {
    var result = count * caloriesPepperoniS;
    alert("Каллорийность пиццы будет составлять " + result);
  } else if (answer2 === "42") {
    var result = count * caloriesPepperoniM;
    alert("Каллорийность пиццы будет составлять " + result);
  } else if (answer2 === "52") {
    var result = count * caloriesPepperoniXXL;
    alert("Каллорийность пиццы будет составлять " + result);
  }
} else if (product2 === answer1.toLowerCase()) {
  var answer2 = prompt(
    "Вы выбрали Mozzarella. Теперь выберите размер  - 32,42,52?"
  );
  var count = prompt("Отлично! Cколько штук Вы хотите заказать?");
  if (answer2 === "32") {
    var result = count * caloriesMozzarellaS;
    alert("Каллорийность пиццы будет составлять " + result);
  } else if (answer2 === "42") {
    var result = count * caloriesMozzarellaM;
    alert("Каллорийность пиццы будет составлять " + result);
  } else if (answer2 === "52") {
    var result = count * caloriesMozzarellaXXL;
    alert("Каллорийность пиццы будет составлять " + result);
  }
} else alert("Такой пиццы не существует");
