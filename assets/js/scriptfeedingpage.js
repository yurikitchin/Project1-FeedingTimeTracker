var leftBtn = document.querySelector('#feedstartleft')
var rightBtn = document.querySelector('#feedstartright')
var lastSideH1 = document.querySelector('#last-side')
var sideSpan = document.querySelector('#side')
var startBtnDiv = document.querySelector('#div-with-start-feed-btns')
var feedingDiv = document.querySelector('#feeding-div')
var feedingSpan = document.querySelector('#start-time')
var lastTime = document.querySelector('#last-time')
var currentSide = document.querySelector('#current-side')
var swapBtn = document.querySelector('#swapBtn')
var stopBtn = document.querySelector('#stopBtn')
var babyBookLink = document.querySelector('#babybooklink');

var userDetails = JSON.parse(localStorage.getItem("SavedProfileDetails")) || [{
    userName: "",
    babyName: "",
    babyWeight: "",
    babyDob: "",
    lastBreast: "",
    lastTime: "",
}]

// Moment.js variables---------------------------------------------------------
const m = moment()
var currentMoment = m.format('ddd LTS')



// Shows which breast was last used/ hides if first time---------------------------
if(userDetails[0].lastBreast == ''){
    lastSideH1.setAttribute('style', 'display:none')
} else{
    sideSpan.textContent = userDetails[0].lastBreast + ' ';
}

// Left/Right button event listeners and Functions-----------------------------------
// Functions set selected side to userDetails array 
// Hides startBtnDiv and excecutes startTimer()
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

// Start Timer function------------------------------------------------------------
// Sets userDetails with updated last side to local storage.
// Displays current side
// Displays start time of feed
// Display stop/swap buttons

// Start a Timer?
// Display Quote of the day?
// Change currentSide on swap?
// Record duration of feed on stop?
function startTimer(){
    localStorage.setItem("SavedProfileDetails",JSON.stringify(userDetails))
    feedingDiv.setAttribute('style', 'display:block')
    feedingSpan.textContent = currentMoment
    lastTime.textContent = userDetails[0].lastTime
    currentSide.textContent = userDetails[0].lastBreast
    swapBtn.addEventListener('click', swapSide)
    stopBtn.addEventListener('click', stopFeed)
}

// swapSide button function--------------------------------------------------------
function swapSide(){
    if(userDetails[0].lastBreast == 'Right'){
        userDetails[0].lastBreast = 'Left'
    }else{
        userDetails[0].lastBreast = 'Right'
    }
    currentSide.textContent = userDetails[0].lastBreast

    console.log(userDetails[0].lastBreast)
    
}

// stopFeed function-------------------------------------------------------------
// save current side to userDetails
// save updated userDetails to Local Storage

// stop timer?
// show next div/feeding deatails?
// hide feedingDiv?
function stopFeed(){
    userDetails[0].lastBreast = currentSide.textContent;
    userDetails[0].lastTime = feedingSpan.textContent;
    localStorage.setItem("SavedProfileDetails",JSON.stringify(userDetails));
    console.log(userDetails)
    window.location.href = "./babybook.html"
}




console.log(currentMoment)
console.log(userDetails)



// Quote of the day-----------------------------------------------------------------
// added quote and author and background to feeding page
// need to style background
var requestUrl = `https://quotes.rest/qod`;

var quoteFetchUrl = fetch(requestUrl)

function quoteFetchURLResolves(ResponseOfAPromise){
  return ResponseOfAPromise.json();
}

var returnAList = quoteFetchUrl.then(quoteFetchURLResolves)
returnAList.then(giveBackQod)

function giveBackQod(DataFromJSONResponse){
    console.log(DataFromJSONResponse)
    document.getElementById('quote').textContent = '"'+ DataFromJSONResponse.contents.quotes[0].quote+'"'
    document.getElementById('author').textContent = DataFromJSONResponse.contents.quotes[0].author
    document.getElementById('quoteDiv').style.background = 'url('+DataFromJSONResponse.contents.quotes[0].background+')'
}























// localStorage.clear()