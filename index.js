/* require: ./src/flickr.js 
 * require: ./src/helper.js*/

// all access;
var photos = [];
var search;
var query;
var photoDiv;
var currentPhoto = 0; 
var next;
var previous;

// global event listener;
document.addEventListener("DOMContentLoaded", function() {
  // search event;
  search = document.querySelector("[role='form']");
  next = document.querySelector("[role='next'");
  previous = document.querySelector("[role='previous']")

  helper.addListener(search, getPhotos, "submit");
  helper.addListener(next, flickr.next, "click");
  helper.addListener(previous, flickr.previous, 'click');
})

function getPhotos(evt) {
  evt.preventDefault();
  query = document.querySelector("[type='search']");
  
  // get keys;
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
  photoDiv = document.querySelector("[role='photo']");
  var photoWrapper = document.querySelector("#photo-wrapper")
  var wrapper = document.querySelector("#wrapper");

  query.value = "";
  search.classList.add("inactive");
  photoWrapper.classList.remove("inactive");
  
  wrapper.classList.add("lightbox");
  photoDiv.setAttribute("src", photos[currentPhoto])

}
