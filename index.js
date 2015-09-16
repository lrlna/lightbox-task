/* require: ./src/flickr.js 
 * require: ./src/helper.js*/

// access to all photos;
var photos = [];

// global event listener;
document.addEventListener("DOMContentLoaded", function() {
  // search event;
  var search = document.querySelector("[role='form']");
  helper.addListener(search, getPhotos, "submit")
})


function getPhotos(evt) {
  evt.preventDefault();
  var query = document.querySelector("[type='search'");
  helper.getRequest('./tokens.json', function(data, err) {
    if (err) console.log(err);
    var keys = JSON.parse(data);
    flickr.searchPhotos(query, keys);
  });
  console.log(photos);
}
