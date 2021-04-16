var leftBtn = document.querySelector('#feedstartleft')
var rightBtn = document.querySelector('#feedstartright')
var lastSideH1 = document.querySelector('#last-side')
var sideSpan = document.querySelector('#side')

var userDetails = JSON.parse(localStorage.getItem("SavedProfileDetails")) || [{
    userName: "",
    babyName: "",
    babyWeight: "",
    babyDob: "",
    lastBreast: "",
}]

// Shows which breast was last used/ hides if first time---------------------------
if(userDetails[0].lastBreast == ''){
    lastSideH1.setAttribute('style', 'display:none')
} else{
    sideSpan.textContent = userDetails[0].lastBreast + ' ';
}

// Left/Right button event listeners and Functions-----------------------------------
// Functions set selected side to userDetails array 
leftBtn.addEventListener('click', feedLeft)
rightBtn.addEventListener('click', feedRight)


function feedLeft(){
    userDetails[0].lastBreast = 'Left'
    
}
function feedRight(){
    userDetails[0].lastBreast = 'Right'
}








console.log(userDetails)
console.log(userDetails[0].lastBreast)
// localStorage.clear()