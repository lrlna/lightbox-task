var flickr = (function (flckr) {

  flckr.constructImgUrl = function(flickrPhotos) {
    var url;  
    [].forEach.call(flickrPhotos, function(a) {
      url = "https://farm" + a.farm + ".staticflickr.com/" + a.server + "/" + a.id + "_" + a.secret + ".jpg"
      photos.push(url);
    });

    return photos; 
  }

  flckr.searchPhotos = function(query, keys, done) {
    var url = "https://api.flickr.com/services/rest/?method=flickr.photos.search&format=json&api_key=" +keys.apiKey + "&is_gallery=true&text=" + query.value + "&nojsoncallback=?";
    helper.getRequest(url, function (res, err) {
      if (err) console.log(err);
      var jsonFlickr = JSON.parse(res);
      // use the array of photos from res to get img url;
      photos = flickr.constructImgUrl(jsonFlickr.photos.photo);
      done(photos)
    }); 
  }

  flckr.next = function() {
    if (currentPhoto != photos.length-1) { 
      currentPhoto = currentPhoto + 1;
    }
    photoDiv.setAttribute("src", photos[currentPhoto])  
  }
  flckr.previous = function() {
    if (currentPhoto != 0) {
      currentPhoto = currentPhoto - 1;
    }
    photoDiv.setAttribute("src", photos[currentPhoto]);
  }

  return flckr;  

}(flickr || {}));
