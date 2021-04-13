var submitBtn = document.querySelector("#submitbutton");
var userName = document.querySelector("#userName");

submitBtn.addEventListener("click",saveUserName)

function saveUserName(e){
//    debugger
    e.preventDefault()
    userName=userName.value
    console.log(userName)
    if(userName===""){
        alert("Use the keyboard monkey")
    } else {localStorage.setItem("SavedProfileArray",userName)}
    
}