let userInput=JSON.parse(localStorage.getItem("currentUser"))
let userEmail=JSON.parse(localStorage.getItem("currentUserEmail"))
let thisUser = userInput.find((item)=> item.email == userEmail)
function deposit(){
  show.innerHTML=`<strong class="text-lg-center d-block">
  <div id="fill"></div> 
  <label for="dptAmount">Enter Amount You Want to Deposit</label>
  <input type="number" class="form-control mx-lg-auto d-block mt-2 text-center fw-bold" id="dptAmount" ></strong>
  <button class="btn btn-warning mt-2 mx-lg-auto d-block"onclick="initDeposit()">Initiate Deposit</button>`
}
function initDeposit(){
  if(dptAmount.value==""){
    fill.innerHTML="<div class='alert alert-danger fw-bold text-center'>Enter Amount You Want to Deposit</div>"
    document.getElementById('slideOut').style.display="none"
    document.getElementById('slideOutToggle').style.display="none"
  }
  else {
   if (dptAmount.value<1) {
    fill.innerHTML="<div class='alert alert-danger fw-bold text-center'>Impossible you can't deposit that amount</div>"
    document.getElementById('slideOut').style.display="none"
    document.getElementById('slideOutToggle').style.display="none"
  }
  else{
    fill.innerHTML=""
    document.getElementById('slideOutToggle').style.display="none"
    document.getElementById('slideOut').style.display="block"
  }
}
}
function yes(){
  let d=new Date()
  let amPm=d.getHours()>=12?"pm":"am"
  let userHistory={
    nameofTransaction:"deposit",amount:dptAmount.value,
    date:new Date().toLocaleDateString(),
    time:`${d.getHours()>12 ? d.getHours()-12:d.getHours()}:${d.getMinutes()}${amPm}`
  }
  thisUser.history.push(userHistory)
  userIndex = userInput.indexOf(thisUser)
  userInput[userIndex] = thisUser
  console.log(userInput)
  thisUser.balance=parseInt(thisUser.balance)+parseInt(dptAmount.value)
  let userDeposit=localStorage.setItem("depositamount",dptAmount.value)
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
function cancel(){
  if(dptAmount.value==""){
    fill.innerHTML="<div class='alert alert-danger col-lg-12 ps-lg-5 pe-lg-5 text-center fw-bold'>You have not done any transaction</div>"
  }else{
    dptAmount.value=""
    fill.innerHTML=""
    document.getElementById("slideOut").style.display="none"
    document.getElementById("slideOutToggle").style.display="none"
  }
}