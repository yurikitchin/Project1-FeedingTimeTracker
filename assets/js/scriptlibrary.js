//Addition of wikipages API
var requestUrl = `https://en.wikipedia.org/api/rest_v1/page/summary/Breastfeeding`;
var wikiFetchUrl = fetch(requestUrl)

function wikiFetchURLResolves(ResponseOfAPromise){
  return ResponseOfAPromise.json();
}

var returnAList = wikiFetchUrl.then(wikiFetchURLResolves)

returnAList.then(giveBackwiki)

function giveBackwiki(DataFromJSONResponse){
    console.log(DataFromJSONResponse)
    document.getElementById("heading").textContent = DataFromJSONResponse.displaytitle
    document.getElementById("info").textContent = DataFromJSONResponse.extract;
    document.getElementById("wikiimg").src = DataFromJSONResponse.originalimage.source
   
}

