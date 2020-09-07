let eggsCount = Number(prompt("Сколько яиц Вы съедаете каждое утро?")); //берём информацию от пользователя в переменную
let monthCount = eggsCount * 7; // в этой переменной производим выражение
alert(`За неделю вы съедаете ${monthCount} яиц!`); // выводим результат через модальное окно с помощью шаблонных строк

let enterLogin = "Enter your login";
switch (enterLogin.toLowerCase()) {
  case "login":
    let enterPassword = "Enter your password";
    {
      switch (enterPassword.toLowerCase()) {
        case "password":
          console.log("Congratulation");
          break;
        default:
          console.log("Password error");
      }
    }
    break;
  default:
    console.log("User not found");
    break;
}

var credentials = {
  //Наши требования логина/пароля
  login: "admin",
  password: "qwerty",
};

let userLogin = prompt("Enter Login"); //Просим пользователя ввести логин и храним его в переменной UserLogin
let userPassword = prompt("EnterPassword"); //Просим пользователя ввести пароль и храним его в переменной UserPassword
let result = false; //результат ввода по умолчанию
let successMsg = document.createElement("p"); //Создаем переменную которая создаёт блок в html
successMsg.innerHTML = "Success"; //текст который хотим выводить на html странице

let errorMsg = document.createElement("p");
errorMsg.innerHTML = "Error";

if (userLogin === credentials.login && userPassword === credentials.password)
  //если логин и пароль введены верно
  result = true; //резултат ввода - true
if (result) {
  //если результат ввод true -
  box.style.backgroundColor = "green"; // добавить блоку #box bg-color green
  document.body.append(successMsg); //всавить раннее созданый текстовый блок
} else {
  //если результат ввода - false
  box.style.backgroundColor = "red"; //задать блоку #box bg-color red
  document.body.append(errorMsg); // вставить блок с текстом Error
}