const passwordField = document.getElementById("password");
const toggleBtn = document.getElementById("togglePassword");
const icon = toggleBtn.querySelector("i");
const generateBtn = document.querySelector("#PasswordGenerator");

toggleBtn.addEventListener("click", function () {
  if (passwordField.type === "password") {
    passwordField.type = "text";
  } else {
    passwordField.type = "password";
  }
});

generateBtn.addEventListener("click", () => {
  let password = "";
  const charector =
    "ABCDEFGHJKLMNOPQSRTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*";

  for (let i = 0; i < 8; i++) {
    password += charector[Math.floor(Math.random() * charector.length)];
  }

  passwordField.value = password;
});
