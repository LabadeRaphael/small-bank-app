var fetch=[]
var details={
  amount:enterAmount.value,
  account:enterAccount.value,
}
 let userInput=JSON.parse(localStorage.getItem("currentUser"))
 let userEmail=JSON.parse(localStorage.getItem("currentUserEmail"))
 let thisUser = userInput.find((item)=> item.email == userEmail)
  function initTransfer(){
        if (enterAmount.value=="" || enterAccount.value=="") {
          fill.innerHTML="<div class='alert alert-danger col-lg-12 ps-lg-5 pe-lg-5 text-center fw-bold'>Fill the Blank Space</div>"
          document.getElementById("slideOut").style.display="none"
          document.getElementById("slideOutToggle").style.display="none"
        }else{
         if (enterAmount.value<1) {
          fill.innerHTML="<div class='alert alert-danger fw-bold text-center'>Impossible you can't transfer that amount</div>"
          document.getElementById('slideOut').style.display="none"
          document.getElementById('slideOutToggle').style.display="none"
        }
        else{
          let accountNum=enterAccount.value
          if(accountNum.length<10 || accountNum.length>10) {
          fill.innerHTML="<div class='alert alert-danger fw-bold text-center'>Enter correct 10 digit account number</div>"
          document.getElementById('slideOut').style.display="none"
          document.getElementById('slideOutToggle').style.display="none"
        }
        else{
          if(enterAmount.value>thisUser.balance){
            fill.innerHTML="<div class='alert alert-danger col-lg-12 ps-lg-5 pe-lg-5 text-center fw-bold'>Your account balance is too low for this transaction</div>"
            document.getElementById("slideOut").style.display="none"
            document.getElementById("slideOutToggle").style.display="none"
          }else{
            fill.innerHTML=""
            document.getElementById("slideOut").style.display="block"
            document.getElementById("slideOutToggle").style.display="none"
          }
        }
      }
    }
  }
    function cancel(){
        if(enterAmount.value == "" || enterAccount.value==""){
          fill.innerHTML="<div class='alert alert-danger col-lg-12 ps-lg-5 pe-lg-5 text-center fw-bold'>You have not done any transaction</div>"
        }else{
          enterAmount.value=""
          enterAccount.value=""
          fill.innerHTML=""
          document.getElementById("slideOut").style.display="none"
        }
      }
      function yes(){
        let userTransfer = (localStorage.setItem("usertransfer",enterAmount.value))
        let userTransferAccount = (localStorage.setItem("usertransferaccount",enterAccount.value))
        window.location="crosscheck.html"
      }
      function signOut(){
        document.getElementById('slideOut').style.display="none"
        document.getElementById('slideOutToggle').style.display="block"
      }
      function signOutyes(){
        window.location="index.html"
      }