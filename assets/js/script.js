var submitButtonUser = document.querySelector("#submitbuttonuser");
var userName = document.querySelector("#username");
var babyName = document.querySelector("#babyname")
var babyWeight = document.querySelector("#babyweight")
var babyDob = document.querySelector("#babydob")
var divUserName = document.querySelector("#div-with-user-name");
var submitButtonBaby = document.querySelector("#submitbuttonbaby")
var submitButtonLogin = document.querySelector('#submitbuttonlogin');
var babyBookLink = document.querySelector('#babybooklink');

var userDetails = JSON.parse(localStorage.getItem("SavedProfileDetails")) || [{
    userName: "",
    babyName: "",
    babyWeight: "",
    babyDob: "",
    lastBreast: "",
}]

var loginButton = document.querySelector("#submitbuttonlogin")
var newUserButton = document.querySelector("#submitbuttonnewuser")

if(localStorage.length == 0){
    submitButtonLogin.setAttribute('style', 'display:none')
}

newUserButton.addEventListener("click", createNewUser)
loginButton.addEventListener("click", loginFromStorage)

//add a click event listener for navbar that will take user to the baby's details.
babyBookLink.addEventListener("click", goToBabyBook)

//this function will hide the user new user/login buttons, take the user to the baby book and attempt to load the baby's details from storage.
function goToBabyBook(e){
    e.preventDefault()
    window.location.href = "./babybook.html"
    document.getElementById("babynameptag").innerText=userDetails[0].babyName;
    document.getElementById("babyweightptag").innerText=userDetails[0].babyWeight;
    document.getElementById("babydobptag").innerText=userDetails[0].babyDob;

}

function createNewUser(){

    document.getElementById("div-with-login").style.display="none";
    divUserName.setAttribute("style", "display:block")
}

function loginFromStorage(){
    window.location.href = "./feedingpage.html"

}



submitButtonUser.addEventListener("click",saveUserName)

function saveUserName(e){
    e.preventDefault()
    userName=userName.value
    console.log(userName)
    if(userName===""){
        alert("Use the keyboard monkey")
    } else {
        userDetails[0].userName=userName
 //     console.log(userDetails)
        divUserName.setAttribute("style", "display:none")
        document.getElementById("baby-details").style.display="block";
    }
    
}

submitButtonBaby.addEventListener("click",saveBabyName)

function saveBabyName(e){
    e.preventDefault()
    babyName=babyName.value
    babyWeight=babyWeight.value
    babyDob=babyDob.value
    if(userName===""){
        alert("Use the keyboard monkey")
    } else {
        userDetails[0].babyName=babyName;
        userDetails[0].babyWeight=babyWeight;
        userDetails[0].babyDob=babyDob;
        console.log(userDetails)
        localStorage.setItem("SavedProfileDetails",JSON.stringify(userDetails))
        document.getElementById("baby-details").style.display="none";
        window.location.href = "./feedingpage.html"
    }
}





// var requestUrl = `https://quotes.rest/qod`;

// var quoteFetchUrl = fetch(requestUrl)

// function quoteFetchURLResolves(ResponseOfAPromise){
//   return ResponseOfAPromise.json();
// }

// var returnAList = quoteFetchUrl.then(quoteFetchURLResolves)

// returnAList.then(giveBackQod)

// function giveBackQod(DataFromJSONResponse){
//     console.log(DataFromJSONResponse.contents.quotes[0].quote)
// }