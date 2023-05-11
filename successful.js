let userInput=JSON.parse(localStorage.getItem("currentUser"))
let userEmail=JSON.parse(localStorage.getItem("currentUserEmail"))
let thisUser = userInput.find((item)=> item.email == userEmail)
welcome.innerHTML = `${thisUser.name}`