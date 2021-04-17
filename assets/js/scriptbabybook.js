//var babyBookLink = document.querySelector('#babybooklink');
var userDetails = JSON.parse(localStorage.getItem("SavedProfileDetails")) || [{
    userName: "",
    babyName: "",
    babyWeight: "",
    babyDob: "",
    lastBreast: "",
}]


document.getElementById("babynameptag").textContent=userDetails[0].babyName;
document.getElementById("babyweightptag").textContent=userDetails[0].babyWeight;
document.getElementById("babydobptag").textContent=userDetails[0].babyDob;