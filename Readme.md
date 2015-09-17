### A lightbox task using [vanilla js](http://vanilla-js.com/)™® and flickr api :sparkles: :tada:

[View](http://lrlna.github.io/lightbox-task/) a live version. 


To Run locally:

Clone this project

Add your [flickr keys](https://www.flickr.com/services/api/auth.howto.web.html) to `tokens.json`
```
touch tokens.json
vim tokens.json
```
```
{
  "apiKey": "YOUR_KEY",
  "apiSecret": "YOUR_SECRET"
  
}
```

Start a serve, e.g. python simple server:
```
python -m SimpleHTTPServer
```
Tests <3 will run from the broswer. `./test/test.js` is using `console.assert` to only print if test does not "pass". In future :star:, should write an assert method that would take condition and message argument to check for whether a condition is correct and then print to the console.

##### Possible improvements for the future:
1. Make helpers (`helper.js` + `flickr.js`) as constructable objects (probably use a more conventional common js pattern?) rather than the simple modules using a module [pattern](http://www.adequatelygood.com/JavaScript-Module-Pattern-In-Depth.html). That will allow for _much_ easier testing. 

##### Thoughts on various photo APIs:

- _Instagram_ : oAuth 2 is awesome, but going through authentication trouble when you just wanna dig into the actual code I did not find was worth it.  
- _Google Custom Search_ : has a limited number of requests per day which interfers quite a bit with the development process. Also documentation for this particular product(especially if comparing to Google Maps per se) is lacking.  
- _Flickr_: this one was the easiest and most comprehensive to get started with. The docs are also excellent :ok_hand:
