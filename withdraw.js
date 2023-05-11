let userInput=JSON.parse(localStorage.getItem("currentUser"))
let userEmail=JSON.parse(localStorage.getItem("currentUserEmail"))
let thisUser = userInput.find((item)=> item.email == userEmail)
function initWithdraw(){
  if (enterAmountDept.value =="") {
  fill.innerHTML="<div class='alert alert-danger col-lg-12 text-center fw-bold'>Enter Amount You Want to Withdraw</div>"
  document.getElementById('slideOut').style.display="none"
  document.getElementById('slideOutToggle').style.display="none"
  }
  else{
      if(enterAmountDept.value>thisUser.balance){
      fill.innerHTML="<div class='alert alert-danger col-lg-12 text-center fw-bold'>Your account balance is too low for this transaction</div>"
      document.getElementById("slideOut").style.display="none"
      document.getElementById('slideOutToggle').style.display="none"
    }else{
      if (enterAmountDept.value<1) {
        fill.innerHTML="<div class='alert alert-danger fw-bold text-center'>Impossible you can't withdraw that amount</div>"
        document.getElementById("slideOut").style.display="none"
        document.getElementById('slideOutToggle').style.display="none"
      }else{
        fill.innerHTML=""
        document.getElementById('slideOut').style="block"
        document.getElementById('slideOutToggle').style.display="none"
      }
    }
  }
}
function yes(){
  let d=new Date()
  let amPm=d.getHours()>=12?"pm":"am"
  let userHistory={
    nameofTransaction:"withdraw",amount:enterAmountDept.value,
    date:new Date().toLocaleDateString(),
    time:`${d.getHours()>12 ? d.getHours()-12 :d.getHours()}:${d.getMinutes()}${amPm}`
  }
  thisUser.history.push(userHistory)
  userIndex = userInput.indexOf(thisUser)
  userInput[userIndex] = thisUser
  console.log(userInput)
  thisUser.balance=parseInt(thisUser.balance)-parseInt(enterAmountDept.value)
  console.log(userIndex)
  localStorage.setItem('currentUser', JSON.stringify(userInput))
  window.location="successful.html"
}
function cancel(){
    if(enterAmountDept.value ==""){
      fill.innerHTML="<div class='alert alert-danger col-lg-12 ps-lg-5 pe-lg-5 text-center fw-bold'>You have not done any transaction</div>"
    }else{
      fill.innerHTML=""
      enterAmountDept.value =""
      document.getElementById("slideOut").style.display="none"
    }
  }
function signOut(){
    document.getElementById('slideOut').style.display="none"
}
function signOutyes(){
    window.location="index.html"
}