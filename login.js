var link = document.querySelector(".login-link-enter");

var popup = document.querySelector(".modal-login");
var close = popup.querySelector(".modal-close");

var form = popup.querySelector("form");
var login = popup.querySelector("[name=email]");
var password = popup.querySelector("[name=password]");

var isStorageSupport = true;
var storage = "";
// var storage = localStorage.getItem("login");

try {
  storage = localStorage.getItem("login");
} catch (err) {
  isStorageSupport = false;
}

link.addEventListener("click", function (evt) {
  evt.preventDefault(); // Заменить переход по ссылке на свои действия
  popup.classList.add("modal-show");

  if (storage) {
    login.value = storage;
    password.focus();
  } else {
    login.focus(); // С тавит фокус в этот элемент
  }
});

close.addEventListener("click", function (evt) {
  evt.preventDefault(); //  У button нет действий по умолчанию, но надо отменить для подстраховки
  popup.classList.remove("modal-show"); // Скрываем модальное окно
  popup.classList.remove("modal-error");
});

form.addEventListener("submit", function (evt) {
  if (!login.value || !password.value) {
    evt.preventDefault();
    // console.log("Нужно ввести логин и пароль");
    popup.classList.remove("modal-error");
    popup.offsetWidth = popup.offsetWidth;
    popup.classList.add("modal-error");
  } else {
    if (isStorageSupport) {
      evt.preventDefault();
      localStorage.setItem("login", login.value);
      // console.log("Отправляем форму");
    }
  }
});

// form.addEventListener("submit", function (evt) {
//   if (!login.value || !password.value) {
//     evt.preventDefault();
//     popup.classList.add("modal-error");
//   } else {
//     if (isStorageSupport) {
//       localStorage.setItem("login", login.value);
//     }
//   }
// });

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (popup.classList.contains("modal-show")) {
      popup.classList.remove("modal-show");
      popup.classList.remove("modal-error");
    }
  }
});