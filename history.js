let userInput=JSON.parse(localStorage.getItem("currentUser"))
let userEmail=JSON.parse(localStorage.getItem("currentUserEmail"))
let thisUser = userInput.find((item)=> item.email == userEmail)
let userDeposit=localStorage.getItem("depositamount")
let currentUserDeposit= localStorage.getItem("depositDate")
console.log(userDeposit);
function signOutyes(){
window.location="bankfirst.html"
}
let depositHistory=thisUser.history.filter((item)=>item.nameofTransaction=="deposit")
let withdrawHistory=thisUser.history.filter((item)=>item.nameofTransaction=="withdraw")
// let transferHistoryAmount=thisUser.history.filter((item)=>item.nameofTransaction=="transferamount")
let transferHistory = thisUser.history.filter((item, _)=>item.nameofTransaction == "transfer")
// let transferHistoryAccount=thisUser.history.filter((item)=>item.nameofTransaction=="transfer")
let rechargeHistory=thisUser.history.filter((item)=>item.nameofTransaction=="rechargeamount")
console.log(transferHistory);
for (let index = 0; index < depositHistory.length; index++) {
  depositamount.innerHTML+= `<p>${depositHistory[index].amount}</p>`
  depositdate.innerHTML+= `<p>${depositHistory[index].date}</p>`
  deposittime.innerHTML+= `<p>${depositHistory[index].time}</p>`
}  
for (let index = 0; index < withdrawHistory.length; index++) {
  withdrawamount.innerHTML+= `<p>${withdrawHistory[index].amount}</p>`
  withdrawdate.innerHTML+= `<p>${withdrawHistory[index].date}</p>`
  withdrawtime.innerHTML+= `<p>${withdrawHistory[index].time}</p>` 
}

for (let index = 0; index < transferHistory.length; index++) {
  transferamount.innerHTML+= `<p>${transferHistory[index].amount}</p>`
  accounttransfer.innerHTML+= `<p>${transferHistory[index].accountTrasnferTo}</p>`     
  transferdate.innerHTML+= `<p>${transferHistory[index].time}</p>`
  
}
for (let index = 0; index < rechargeHistory.length; index++) {
  console.log();
  rechargeamount.innerHTML+= `<p>${rechargeHistory[index].amount}</p>`
  rechargedate.innerHTML+= `<p>${rechargeHistory[index].date}</p>`
  rechargetime.innerHTML+= `<p>${rechargeHistory[index].time}</p>`
}