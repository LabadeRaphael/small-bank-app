let userInput=JSON.parse(localStorage.getItem("currentUser"))
let userEmail=JSON.parse(localStorage.getItem("currentUserEmail"))
console.log(userInput)
console.log(userEmail);
let thisUser = userInput.find((item)=> item.email == userEmail)
console.log(thisUser);
welcome.innerHTML = `welcome ${thisUser.name}`
function loadpage(){
  localStorage.getItem('currentUser', JSON.stringify(userInput))
  localStorage.setItem('currentUser', JSON.stringify(userInput))
  account.innerHTML=` <strong class="fs-3 text-lg-center d-block">${thisUser.accountNumber}</strong>`
  balance.innerHTML=`<strong class="fs-3 text-lg-center d-block">${thisUser.balance.toLocaleString("en-US", {style:"currency",currency:"USD"})}</strong>`
  bvn.innerHTML=`<strong class="fs-3 text-lg-center d-block">${thisUser.bvn}</strong>`
}
function signOutyes(){
  window.location="index.html"
}