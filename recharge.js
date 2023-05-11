let userInput=JSON.parse(localStorage.getItem("currentUser"))
let userEmail=JSON.parse(localStorage.getItem("currentUserEmail"))
let thisUser = userInput.find((item)=> item.email == userEmail)
function initRecharge(){
  if (recharge.value =="" || rechargeNum.value==""){
    fill.innerHTML="<div class='alert alert-danger col-lg-12 text-center fw-bold'>Fill all the blank space</div>"
    document.getElementById('slideOut').style.display="none"
    document.getElementById('slideOutToggle').style.display="none"
    }else{
      let phoneNum = rechargeNum.value
      if(phoneNum.length<11 || phoneNum.length>11) {
      fill.innerHTML="<div class='alert alert-danger fw-bold text-center'>Enter correct 11 digit number</div>"
      document.getElementById('slideOut').style.display="none"
      document.getElementById('slideOutToggle').style.display="none"
    }
    else{
      if(recharge.value>thisUser.balance){
        fill.innerHTML="<div class='alert alert-danger col-lg-12 text-center fw-bold'>Your account balance is too low for this transaction</div>"
        document.getElementById("slideOut").style.display="none"
        document.getElementById('slideOutToggle').style.display="none"
      }
    else{
      if (recharge.value<1) {
        fill.innerHTML="<div class='alert alert-danger fw-bold text-center'>Impossible you can't recharge that amount</div>"
        document.getElementById("slideOut").style.display="none"
        document.getElementById('slideOutToggle').style.display="none"
      }
      else{
        fill.innerHTML=""
        document.getElementById('slideOut').style="block"
        document.getElementById('slideOutToggle').style.display="none"
      }
    }
  }
  }
}
function cancel(){
  if(recharge.value ==""){
    fill.innerHTML="<div class='alert alert-danger col-lg-12 ps-lg-5 pe-lg-5 text-center fw-bold'>You have not done any transaction</div>"
  }else{
    rechargeNum.value=""
    recharge.value=""
    fill.innerHTML=""
    document.getElementById("slideOut").style.display="none"
  }
}
function yes(){ 
  let d=new Date()
  let amPm=d.getHours()>=12?"pm":"am"
  let userHistory={
    nameofTransaction:"rechargeamount",amount:recharge.value,
    date:new Date().toLocaleDateString(),
    time:`${d.getHours()>12 ? d.getHours()-12 : d.getHours()}:${d.getMinutes()}${amPm}`
  }
  console.log(userHistory.time);
  thisUser.history.push(userHistory)
  let rehargeNumber=localStorage.setItem("rechargeNum",rechargeNum.value)
  userIndex = userInput.indexOf(thisUser)
  userInput[userIndex] = thisUser
  console.log(userInput)
  thisUser.balance=parseInt(thisUser.balance)-parseInt(recharge.value)
  console.log(userIndex)
  localStorage.setItem('currentUser', JSON.stringify(userInput))
  window.location="successful.html"
}
function signOut(){
  document.getElementById('slideOut').style.display="none"
  document.getElementById('slideOutToggle').style.display="block"
}
function signOutyes(){
  window.location="index.html"
}



