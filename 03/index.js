let selectTask = prompt("Введите название задания");
switch (selectTask) {
  case "switch size":
    //switch: sizes
    let userData = +prompt(
      "Какой размер Вы хотите конвертировать в USA размер? "
    );
    switch (userData) {
      case 40:
        alert("Это размер S");
        break;
      case 42:
        alert("Это размер M");
        break;
      case 44:
        alert("Это размер M");
        break;
      case 46:
        alert("Это размер L");
        break;
      case 48:
        alert("Это размер L");
        break;
      case 50:
        alert("Это размер XL");
        break;
      case 52:
        alert("Это размер XL");
        break;
      case 54:
        alert("Это размер XXL");
        break;
      default:
        alert("Такого размера не существует");
    }
    break;
  case "switch if":
    //switch: if
    var color = prompt("Введите цвет", "");
    if (color === "red") {
      document.write("<div style='background-color: red;'>красный</div>");
      var color = prompt("Введите цвет", "");
      if (color === "black") {
        document.write(
          "<div style='background-color: black; color: white;'>черный</div>"
        );
      }
    } else if (color === "blue") {
      document.write("<div style='background-color: blue;'>синий</div>");
      var color = prompt("Введите цвет", "");
      if (color === "green") {
        document.write("<div style='background-color: green;'>зеленый</div>");
      }
    } else
      document.write("<div style='background-color: gray;'>Я не понял</div>");
    break;
  case "prompt or":
    //prompt:or
    let age = Number(prompt("Сколько Вам лет"));
    let today = new Date();
    var year = today.getFullYear();
    let calc = year - age;
    if (age == false || undefined) {
      alert("error");
    } else alert(calc);
    break;
  case "confirm if this days":
    //confirm: if this days
    let question = confirm("шоппинг?");
    if (question) {
      alert("okay");
    } else alert("ты бяка");
    break;
  // //triple prompt
  // let firstName = prompt("Your first name?");
  // let secondName = prompt("Your second name?");
  // let thirdName = prompt("Your third name?");
  // alert(`${firstName}  ${secondName} ${thirdName}`);

  // //triple prompt
  // let firstName = prompt("Your first name?") || "Ivan";
  // let secondName = prompt("Your second name?") || "Ivanovich";
  // let thirdName = prompt("Your third name?") || "Ivanov";
  // alert(`${firstName}  ${secondName} ${thirdName}`);
  case "triple prompt":
    //triple prompt
    let firstName = prompt("Your first name?");
    let secondName = prompt("Your second name?");
    let thirdName = prompt("Your third name?");
    if (firstName === null || " ") {
      firstName = "Ivan";
    }
    if (secondName === null || " ") {
      secondName = "Ivanovich";
    }
    if (thirdName === null || " ") {
      thirdName = "Ivanov";
    }
    alert(`${firstName}  ${secondName} ${thirdName}`);
    break;
  case "login and password":
    //login and password
    let enterLogin = prompt("Enter your login");
    let login = "admin";
    let password = "qwerty";
    if (enterLogin === login) {
      let enterPassword = prompt("Enter Password");
      if (enterPassword === password) {
        alert("Congratulation!");
      } else alert("Password error");
    } else alert("Login error");
    break;
  case "currency calc":
    //currency calc && currency calc: improved
    let valute1 = "usd";
    let valute2 = "eur";
    let whatIsValute = prompt("Укажите интересующую Вас валюту (USD/EUR)");
    switch (whatIsValute.toLowerCase()) {
      case valute1:
        let uahToUsd = Number(prompt("Сколько гривен вы хотите обменять?"));
        let result1 = uahToUsd / 8;
        alert(`Это будет ${result1.toFixed(2)} януковичей`);
        break;
      case valute2:
        let uahToEur = Number(prompt("Сколько гривен вы хотите обменять?"));
        let result2 = uahToEur / 10;
        alert(`Это будет ${result2.toFixed(2)} азаровых`);
        break;
      default:
        alert("Такой валюты не существует");
        break;
    }
    break;
  case "scissors":
    let userAnswer = Number(
      prompt("Сделайте Ваш выбор где 1 - Камень, 2 - Ножницы, 3 - Бумага")
    );
    let computerAnswer = Math.ceil(Math.random() * 3);
    alert(`Компьютер выбрал ${computerAnswer}`);
    if (
      (userAnswer === 1 && computerAnswer > 1) ||
      (userAnswer === 2 && computerAnswer === 3)
    ) {
      alert("You WIN!");
    } else if (
      (userAnswer === 3 && computerAnswer < 3) ||
      (userAnswer === 2 && computerAnswer === 1)
    ) {
      alert("You DIED");
    } else {
      alert("Ничья!");
    }

    break;
  default:
    alert("Такое задание не сделано");
}
