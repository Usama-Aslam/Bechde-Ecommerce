var btnLogin=document.getElementById("log-in");
var btnSignUp=document.getElementById("sign-up");
var loginHeading=document.getElementById("login-box-heading");
var signUpHeading=document.getElementById("signup-box-heading");
var signUpFormDiv=document.getElementById("signup-form-div-child")
var loginFormDiv=document.getElementById("login-form-div")
var loginSignUpBtn=document.getElementById("login-signUpBtn")

/*modalbox signup form and its animation */
btnSignUp.addEventListener('click',(event)=>{
    signUpHeading.classList.add("active");
    loginHeading.classList.remove("active");
    signUpFormDiv.style.position="static";
    loginFormDiv.style.position="absolute";
    signUpFormDiv.classList.add("slideInRight");
    loginFormDiv.classList.remove("slideInLeft");
    verifyDiv.classList.remove("slideInLeft");
})

/*modalbox login form and its animation */
btnLogin.addEventListener('click',(event)=>{
    loginFormDiv.classList.add('slideInLeft');
    loginHeading.classList.add("active");
    signUpHeading.classList.remove("active");
    loginFormDiv.style.position="static";
    signUpFormDiv.style.position="absolute";
    signUpFormDiv.classList.remove("slideInRight");
})

/*modalbox signup btn on login-form and its animation */
loginSignUpBtn.addEventListener("click",()=>{
    signUpHeading.classList.add("active");
    loginHeading.classList.remove("active");
    signUpFormDiv.style.position="static";
    loginFormDiv.style.position="absolute";
    signUpFormDiv.classList.add("slideInRight");
    loginFormDiv.classList.remove('slideInLeft');
    verifyDiv.classList.remove('slideInRight');
})

/*modalbox create button of signup form and its animation */
var btnCreate=document.getElementById("btn-create");
var verifyDiv=document.getElementById("verifyDiv");
btnCreate.addEventListener('click',()=>{
    verifyDiv.style.position="static";
    signUpFormDiv.style.position="absolute";
    loginFormDiv.style.position="absolute";
    verifyDiv.classList.add("slideInRight");
    signUpFormDiv.classList.remove("slideInRight");
    loginFormDiv.classList.remove("slideInLeft");
   
})
var btnContinue=document.getElementById("btn-continue");
btnContinue.addEventListener('click',()=>{
        loginFormDiv.classList.add('slideInLeft');
        loginHeading.classList.add("active");
        signUpHeading.classList.remove("active");
        signUpFormDiv.style.position="absolute";
        verifyDiv.style.position="absolute";
        loginFormDiv.style.position="static";
        signUpFormDiv.classList.remove("slideInRight");
        verifyDiv.classList.remove("slideInRight");
    })
    

/*modalbox close button which reset all the classes*/
var closeBtn=document.querySelector(".closeBtn");
closeBtn.addEventListener('click',()=>{
    loginFormDiv.className="";
    signUpFormDiv.className="";
    verifyDiv.className="";
})