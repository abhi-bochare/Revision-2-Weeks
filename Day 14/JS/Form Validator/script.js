const email = document.getElementById("email");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirmPassword");
const age = document.getElementById("age");
const submitBtn = document.getElementById("submitBtn");

function setStatus(input, errorEl, message) {
  if (message) {
    input.classList.add("invalid");
    input.classList.remove("valid");
    errorEl.textContent = message;
    return false;
  } else {
    input.classList.add("valid");
    input.classList.remove("invalid");
    errorEl.textContent = "";
    return true;
  }
}

function validateEmail() {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return setStatus(
    email,
    emailError,
    regex.test(email.value) ? "" : "Invalid email format",
  );
}

function validatePassword() {
  const regex = /^(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9]).{8,}$/;
  return setStatus(
    password,
    passwordError,
    regex.test(password.value)
      ? ""
      : "Min 8 chars, 1 uppercase, 1 number, 1 special char",
  );
}

function validateConfirmPassword() {
  return setStatus(
    confirmPassword,
    confirmError,
    confirmPassword.value === password.value && confirmPassword.value
      ? ""
      : "Passwords do not match",
  );
}

function validateAge() {
  const value = Number(age.value);
  return setStatus(
    age,
    ageError,
    value >= 18 && value <= 100 ? "" : "Age must be 18–100",
  );
}

function validateForm() {
  const isValid =
    validateEmail() &&
    validatePassword() &&
    validateConfirmPassword() &&
    validateAge();

  submitBtn.disabled = !isValid;
}

email.addEventListener("input", validateForm);
password.addEventListener("input", validateForm);
confirmPassword.addEventListener("input", validateForm);
age.addEventListener("input", validateForm);

document.getElementById("form").addEventListener("submit", (e) => {
  e.preventDefault();
  alert("Form submitted successfully!");
});
