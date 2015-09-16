var helper = (function (help) {
  
  help.addListener = function(selector, handler, type) {
    if (type instanceof Array) {
      [].forEach.call(type, function(a) {
        selector.addEventListener(a, handler, false)
      })
    } else {
      selector.addEventListener(type, handler, false);
    }
  }

  // abstracted get request;
  help.getRequest = function(path, callback) {
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
  
  return help;

}(helper || {}));
