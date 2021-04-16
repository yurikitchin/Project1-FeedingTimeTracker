var leftBtn = document.querySelector('#feedstartleft')
var rightBtn = document.querySelector('#feedstartright')
var lastSideH1 = document.querySelector('#last-side')
var sideSpan = document.querySelector('#side')
var startBtnDiv = document.querySelector('#div-with-start-feed-btns')
var timerDiv = document.querySelector('#timer-div')
var timer = document.querySelector('#timer')

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
    startBtnDiv.setAttribute('style', 'display:none')
    startTimer()
}
function feedRight(){
    userDetails[0].lastBreast = 'Right'
    startBtnDiv.setAttribute('style', 'display:none')
    startTimer()
}

// Sets userDetails with updated last side to local storage.
// Starts timer/ records time of feed
// Display Quote of the day?
// Display stop/swap buttons?
// Record time and duration of feed?
function startTimer(){
    localStorage.setItem("SavedProfileDetails",JSON.stringify(userDetails))
    timerDiv.setAttribute('style', 'display:block')
}






console.log(userDetails)
console.log(userDetails[0].lastBreast)
// localStorage.clear()