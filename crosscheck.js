let userTransfer = JSON.parse(localStorage.getItem("usertransfer"))
let userTransferAccount = JSON.parse(localStorage.getItem("usertransferaccount"))
let userInput=JSON.parse(localStorage.getItem("currentUser"))
let userEmail=JSON.parse(localStorage.getItem("currentUserEmail"))
let thisUser = userInput.find((item)=> item.email == userEmail)
console.log(userTransfer);

function initTransfer(){
  if (confirmAmount.value=="" || confirmAccount.value=="") {
    fill.innerHTML="<div class='alert alert-danger col-lg-12 ps-lg-5 pe-lg-5 text-center fw-bold'>Fill the Blank Space</div>"
    document.getElementById('slideOut').style.display="none"
    document.getElementById('slideOutToggle').style.display="none"
    console.log(usertransfer)
  }
  else{
    if(confirmAmount.value==userTransfer && confirmAccount.value==userTransferAccount){
      fill.innerHTML=""
      document.getElementById('slideOut').style.display="block"
      document.getElementById('slideOutToggle').style.display="none"
    }else{
      fill.innerHTML="<div class='alert alert-danger col-lg-12 ps-lg-5 pe-lg-5 text-center fw-bold'>Value doesn't match</div>"
      document.getElementById('slideOut').style.display="none"
      document.getElementById('slideOutToggle').style.display="none"
    }
  }
}
function cancel(){
  if(confirmAmount.value == "" || confirmAccount.value==""){
    fill.innerHTML="<div class='alert alert-danger col-lg-12 ps-lg-5 pe-lg-5 text-center fw-bold'>You have not done any transaction</div>"
  }else{
    fill.innerHTML=""
    confirmAmount.value =""
    confirmAccount.value=""
    document.getElementById("slideOut").style.display="none"
    document.getElementById('slideOutToggle').style.display="none"
  }
}

function yes(){
  let d=new Date()
  let amPm=d.getHours()>=12?"pm":"am"
  let userHistory={
    amount: confirmAmount.value,
    nameofTransaction:"transfer",
    accountTrasnferTo: confirmAccount.value,
    date:new Date().toLocaleDateString(),
    time:`${d.getHours()>12 ? d.getHours()-12 : d.getHours()}:${d.getMinutes()}${amPm}`
  }
  thisUser.history.push(userHistory)
  userIndex = userInput.indexOf(thisUser)
  userInput[userIndex] = thisUser
  console.log(userInput)
  thisUser.balance=parseInt(thisUser.balance)-parseInt(confirmAmount.value)
  console.log(userIndex)
  localStorage.setItem('currentUser', JSON.stringify(userInput))
  window.location="successfultransfer.html"
}
function signOut(){
  document.getElementById('slideOut').style.display="none"
  document.getElementById('slideOutToggle').style.display="block"
}
function signOutyes(){
  window.location="index.html"
}