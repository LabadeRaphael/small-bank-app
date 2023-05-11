var userInput=[]
if (localStorage.currentUser) {
    usersArray = JSON.parse(localStorage.getItem("currentUser"));
} else {
    usersInput = [];  
}
function signIn(){
    var userDetails={
        email:email.value,
        password:password.value,
    }
    userInput=JSON.parse(localStorage.getItem("currentUser"))
    console.log(userInput)
    let thisUser = userInput.find((item, index)=>item.email == userDetails.email)
    let thisUserPassword = userInput.find((item, index)=>item.password == userDetails.password)
    console.log(thisUser);
    if(thisUser){
        if(thisUser.password == userDetails.password){
        fill.innerHTML=""
        localStorage.setItem('currentUserEmail', JSON.stringify(thisUser.email))
        window.location="bankthird.html"
        }
        else{
            if (userDetails.password =="") {
            fill.innerHTML=`<div class="alert alert-danger fw-bold col-10 text-center mx-auto">Enter Your passsword</div>`
            }else{

                fill.innerHTML=`<div class="alert alert-danger fw-bold col-10 text-center mx-auto">Incorrect Password</div>`
            }
        }
    }
    else{
        if (userDetails.password =="" || userDetails.email=="") {
            fill.innerHTML=`<div class="alert alert-danger fw-bold col-10 text-center mx-auto">Fill your details</div>`
        }else{
            fill.innerHTML=`<div class="alert alert-danger fw-bold col-10 text-center mx-auto">Incorrect Email</div>`
        }
    }          
}