var helper = (function (helper) {
  
  // add listeners to your fave selector;
  helper.addListener = function(selector, handler, type) {
    if (type instanceof Array) {
      [].forEach.call(type, function(a) {
        selector.addEventListener(a, handler, false)
      })
    } else {
      selector.addEventListener(type, handler, false);
    }
  }

  // handle thy errors;
  helper.displayError = function(err) {
    selectors.error.innerText = err;
    selectors.error.classList.remove("hide");
    // clear message afterwards
    setTimeout(function() {
      selectors.error.innerText = "";
      selectors.error.classList.add("hide");
    }, 5000);
  }

  // abstracted get request;
  helper.getRequest = function(path, callback) {
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
  
  return helper;

}(helper || {}));
