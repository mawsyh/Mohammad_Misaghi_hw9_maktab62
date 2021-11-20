const input = document.querySelector("#passwd");
const passChecker = document.querySelector("#password-checker-message");
const enterPassMessage = document.querySelector(".enterpass-text");
const lineEl = document.querySelector("#line");
const eyeEl = document.querySelector(".fa-eye-slash");
const showPassEl = document.querySelector("#show-pass-bot");

input.addEventListener("keyup", () => {
  // if the password input is empty
  if (input.value === "") {
    passChecker.textContent = "Password input is empty!";
    setColor("#0184ff");
    passChecker.style.color = "rgb(112, 112, 112)";
  }

  // if the password meets the requirements
  else if (
    input.value.match(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/g
    )
  ) {
    passChecker.textContent = "You can choose this password!";
    setColor("#3CB371");
  }

  // if the password doesn't meet the requirements
  else {
    passChecker.textContent =
      "Your password should contain at least 8 characters, one capital letter, a number and a special character.";
    setColor("red");
  }
});

// making the eye able to show the password
showPassEl.addEventListener("click", () => {
  if (eyeEl.classList.contains("fa-eye-slash")) {
    eyeEl.classList.replace("fa-eye-slash", "fa-eye");
    input.type = "text";
  } else {
    eyeEl.classList.replace("fa-eye", "fa-eye-slash");
    input.type = "password";
  }
});

//controling the colors
function setColor(color) {
  passChecker.style.color = color;
  enterPassMessage.style.color = color;
  eyeEl.style.color = color;
  lineEl.style.borderColor = color;
}
