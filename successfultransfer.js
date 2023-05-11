let userTransfer = JSON.parse(localStorage.getItem("usertransfer"))
let userTransferAccount = JSON.parse(localStorage.getItem("usertransferaccount"))
let userInput=JSON.parse(localStorage.getItem("currentUser"))
let userEmail=JSON.parse(localStorage.getItem("currentUserEmail"))
let thisUser = userInput.find((item)=> item.email == userEmail)
welcome.innerHTML = `${thisUser.name}`
success.innerHTML = `The transfer of ${userTransfer} from your account to this account number ${userTransferAccount} was successful`       