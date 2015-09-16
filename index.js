/* require: ./src/flickr.js 
 * require: ./src/helper.js*/

// all access;
var photos = [];
var search;
var query;
var currentPhoto = 0; 

// global event listener;
document.addEventListener("DOMContentLoaded", function() {
  // search event;
  search = document.querySelector("[role='form']");
  helper.addListener(search, getPhotos, "submit")
})


function getPhotos(evt) {
  evt.preventDefault();
  query = document.querySelector("[type='search']");
  helper.getRequest('./tokens.json', function(data, err) {
    if (err) console.log(err);
    var keys = JSON.parse(data);
    // send a req to flickr api;
    flickr.searchPhotos(query, keys, function(photos) {
      displayPhotos();
    });
  });
}

// get the lightbox magic going :tada:;
var displayPhotos = function() {  
  var photoDiv = document.querySelector("[role='photo']");

  query.value = "";
  search.classList.add("inactive");
  photoDiv.classList.remove("inactive");
  
  photoDiv.setAttribute("src", photos[currentPhoto])

}
