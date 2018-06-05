var btnLogin=document.getElementById("log-in");
var btnSignUp=document.getElementById("sign-up");
var loginHeading=document.getElementById("login-box-heading");
var signUpHeading=document.getElementById("signup-box-heading");
var signUpFormDiv=document.getElementById("signup-form-div")
var loginFormDiv=document.getElementById("login-form-div")
btnSignUp.addEventListener('click',(event)=>{
    signUpHeading.classList.add("active");
    signUpHeading.style.disabled="true";
    loginHeading.classList.remove("active");
    loginHeading.style.disabled="false";
    signUpFormDiv.style.position="static";
    loginFormDiv.style.position="absolute";
})
btnLogin.addEventListener('click',(event)=>{
    loginHeading.classList.add("active");
    loginHeading.style.disabled="true";
    signUpHeading.classList.remove("active");
    signUpHeading.style.disabled="false";
    loginFormDiv.style.position="static";
    signUpFormDiv.style.position="absolute";
})
var btnCreate=document.getElementById("btn-create");
btnCreate.addEventListener("click",()=>{
    
})

