### A lightbox task using [vanilla js](http://vanilla-js.com/)™® and flickr api :sparkles: :tada:

[View](http://lrlna.github.io/lightbox-task/) a live version. 


To Run locally:

1. Clone this project
2. Add your [flickr keys](https://www.flickr.com/services/api/auth.howto.web.html) to `tokens.json`
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

3. Start a serve, e.g. python simple server:
```
python -m SimpleHTTPServer
```

##### Thoughts on various photo APIs:

- _Instagram_ : oAuth 2 is awesome, but going through authentication trouble when you just wanna dig into the actual code I did not find was worth it.  
- _Google Custom Search_ : has a limited number of requests per day which interfers quite a bit with the development process. Also documentation for this particular product(especially if comparing to Google Maps per se) is lacking.  
- _Flickr_: this one was the easiest and most comprehensive to get started with. The docs are also excellent :ok_hand:
