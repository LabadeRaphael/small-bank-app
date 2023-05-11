var userInput;
if(localStorage.getItem('currentUser') === null){
    userInput = []
}else{
    userInput = JSON.parse(localStorage.getItem('currentUser'))
}
function signUp(){
    var userDetails={
        name:Name.value,
        email:email.value,
        password:password.value,
        balance:0,
        accountNumber: Math.floor(Math.random()*11111111111),
        bvn: Math.floor(Math.random()*111111111111),
        history:[]
    }
    if (Name.value=="" || email.value=="" || password.value=="") {
        fill.innerHTML="<div class='alert alert-danger col-lg-11 ms-lg-5 text-center fw-bold'>Fill All Blank Space</div>"
    }
    else {
        fill.innerHTML=""
        userInput.push(userDetails)
        console.log(userInput)
        localStorage.setItem("currentUser",JSON.stringify(userInput))
        window.location="banksecond.html"
    }
}