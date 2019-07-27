# URL Shortener Microservice

This is a simple URL Shortener Microservice built with Express. To use the microservice, `POST` a URL to 
`indigo-tiglon.glitch.me/api/shorturl/new` and API will return a shortened URL in the JSON response
`{"original_url":"www.google.com","short_url":1}`.

If a invalid URL that doesn't follow `http(s)://www.example.com(/more/routes)` format send to the API, 
the JSON response will contain an error like `{"error":"invalid URL"}`.

Visiting the shortened URL, will redirect you to the original link.
 
This app was built using [Glitch](https://glitch.com/) with [Express](https://expressjs.com/) web framework.

[Live Demo](https://indigo-tiglon.glitch.me/)

![alt text](https://github.com/DilanLivera/url-shortener-microservice/blob/master/public/img/url-shortener-microservice-img.png)
