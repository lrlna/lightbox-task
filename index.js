/* require: ./src/flickr.js 
 * require: ./src/helper.js*/

// all access;
var photos = [];
var currentPhoto = 0; 
var selectors = {};

// global event listener;
document.addEventListener("DOMContentLoaded", function() {
  // search event;
  selectors.search = document.querySelector("[role='form']"),
  selectors.next =  document.querySelector("[role='next']"),
  selectors.previous =  document.querySelector("[role='previous']"),
  selectors.close =  document.querySelector("[role='close']"),
  selectors.query = document.querySelector("[type='search']"),
  selectors.photoDiv = document.querySelector("[role='photo']"),
  selectors.lightboxView = document.querySelectorAll(".lightbox-view"),
  selectors.wrapper = document.querySelector("#wrapper")

  helper.addListener(selectors.search, getPhotos, "submit");
  helper.addListener(selectors.next, flickr.next, "click");
  helper.addListener(selectors.previous, flickr.previous, "click");
  helper.addListener(selectors.close, removePhotos, "click");
})

function getPhotos(evt) {
  evt.preventDefault();
  
  // get keys;
  helper.getRequest('./tokens.json', function(data, err) {
    if (err) console.log(err);
    var keys = JSON.parse(data);
    // send a req to flickr api;
    flickr.searchPhotos(selectors.query, keys, function(photos) {
      displayPhotos();
    });
  });
}

// bring back the search function;
function removePhotos() {
  [].forEach.call(selectors.lightboxView, function(a) {
    a.classList.add('hide');
  });
  
  // clear photos array from previous results;
  photos = [];
  
  selectors.wrapper.classList.remove("lightbox");
  selectors.search.classList.remove("hide");
}

// get the lightbox magic going :tada:;
var displayPhotos = function() {  

  // clear search query;
  selectors.query.value = "";
  selectors.search.classList.add("hide");
  [].forEach.call(selectors.lightboxView, function(a) {
    a.classList.remove("hide");
  });
  
  selectors.wrapper.classList.add("lightbox");
  selectors.photoDiv.setAttribute("src", photos[currentPhoto])

}
