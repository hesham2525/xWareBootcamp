let email = document.getElementById("email");
let password = document.getElementById("password");
let submit = document.getElementById("submit");
function save() {
  localStorage.setItem("password", password.value);
  localStorage.setItem("email", email.value);
}
submit.addEventListener("click", save);
