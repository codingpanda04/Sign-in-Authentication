const email = document.getElementById("email");
const username = document.getElementById("username");
const password = document.getElementById("password");
const signText = document.getElementById("signtxt");
const logText = document.getElementById("logtxt");
const termsDiv = document.querySelector(".terms");
const submitBtn = document.getElementById("submit");
const logBtn = document.getElementById("login");
const form = document.querySelector(".form");
const errorMsg = document.querySelector(".error");
const checkBox = document.getElementById("box");
const errorCont = document.getElementById("errorcontent");
const showPass = document.getElementById("show");



function pageSwitch(){
    signText.innerHTML = "Log In";
    submitBtn.innerHTML = "Log in";
    username.style.display = "none";
    email.setAttribute("placeholder", "Email/Username");
    termsDiv.style.display = "none";
    logText.innerHTML = "Don't have an account?";
    logText.appendChild(logBtn);
    logBtn.innerHTML = "Sign up";
    logBtn.setAttribute("onclick", "SignPage()");
    showPass.style.marginTop = "61px";
    showPass.style.marginLeft = "150px";
}

function SignPage(){
    window.location.href = "index.html";
}

username.addEventListener("input", ()=>{
    if(username.value.length < 5 || username.value.length < 1){
        username.style.outlineColor = "red";
    }
    else{
        username.style.outlineColor = "rgb(0, 255, 55)";
    }
})

email.addEventListener("input", ()=>{
    if(email.value.length < 10 || email.value.length < 1){
        email.style.outlineColor = "red";
    }
    else{
        email.style.outlineColor = "rgb(0, 255, 55)";
    }
})

password.addEventListener("input", ()=>{
    if(password.value.length < 8 || password.value.length < 1){
        password.style.outlineColor = "red";
    }
    else{
        password.style.outlineColor = "rgb(0, 255, 55)";
    }
})

function validateForm(){
    if(username.value === "" || email.value === "" || password.value === ""){
        setTimeout(() => {
            errorMsg.style.display = "none";
        }, 3000);
        errorMsg.style.display = "block";
    }
    else{
        errorMsg.style.display = "none";
        window.location.href = "dashboard.html";
    }
}

function showPassword(){
    password.setAttribute("type", "text");
    showPass.innerHTML = "hide";
    showPass.setAttribute("onclick", "hidePassword()")
}

function hidePassword(){
    password.setAttribute("type", "password");
    showPass.innerHTML = "show";
    showPass.setAttribute("onclick", "showPassword()");
}


















