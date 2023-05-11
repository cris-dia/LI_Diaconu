let signup = document.querySelector(".signup");
let login = document.querySelector(".login");
let slider = document.querySelector(".slider");
const loginForm = document.getElementById("login-form");
const signupForm = document.getElementById("signup-form")
const loginErrorMsg = document.getElementById("login-error-msg");
const logButton = document.getElementById("login-form-submit")
const signButton = document.getElementById("signup-form-submit")
let formSection = document.querySelector(".form-section");
let loggedIn = false;

signup.addEventListener("click", () =>{
    slider.classList.add("moveslider");
    formSection.classList.add("form-section-move");
});

login.addEventListener("click", () =>{
    slider.classList.remove("moveslider");
    formSection.classList.remove("form-section-move");
});
logButton.addEventListener("click", (e) =>{
    e.preventDefault();
    const email = loginForm.email.value;
    const password = loginForm.password.value;

    if (email === "admin@gmail.com" && password === "test") {
        alert("You have successfully logged in.");
        loggedIn=true;
        window.location.replace("http://192.168.0.162:8080");
    } else {
        loginErrorMsg.style.opacity = 1;
    }
});
signButton.addEventListener("click", (e) =>{
    e.preventDefault();
    const name = signupForm.name.value;
    const email = signupForm.email.value;
    const password = signupForm.password.value;
    const pconfirm = signupForm.password.value;

    if (name === "user" && email === "user@gmail.com" && password === "test" && pconfirm === "test") {
        alert("You have successfully logged in.");
        loggedIn=true;
        window.location.replace("http://192.168.0.162:8080");
    } else {
        loginErrorMsg.style.opacity = 1;
    }
});
function hideLoginButton() {
    const loginBtn = document.getElementById("login-btn");
    loginBtn.style.display = "none";
  }
  
  if (loggedIn) {
    hideLoginButton();
  }