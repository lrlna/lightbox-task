document.addEventListener("DOMContentLoaded", function() {
  // search event;
  var search = document.querySelector("[role='submit'");
  addListener(search, getPhotos)
})


var getPhotos = function (){
  var query = document.querySelector("[type='search'").innerHTML;
  console.log(query);
  console.log(token);
  getRequest('./tokens.json', function(data, err){
    var keys = JSON.parse(data);
    console.log(keys);
    var url = "https://www.googleapis.com/customsearch/v1?key=" + keys.apiKey + "&cx=" + keys.cx + "&q=" + query
    
    getRequest(url); 
  });
}

// HELPER METHODS;

function addListener(selector, handler) {
  selector.addEventListener("click", handler);
}

// abstracted get request;
function getRequest(path, callback) {
  var httpRequest = new XMLHttpRequest();
  httpRequest.onreadystatechange = function() {
    if (httpRequest.readyState === XMLHttpRequest.DONE) {
      if (httpRequest.status === 200) {
        if (callback) callback(httpRequest.responseText, null);
      }
      else {
        var message = "An error occured: " + httpRequest.status;
        if (callback) callback(null, message);
      }
    }
  };
  httpRequest.open('GET', path, true)
  httpRequest.send();
}
