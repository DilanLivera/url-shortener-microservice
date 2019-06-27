const express = require('express');
const router = express.Router();
const db = require("../models");
const dns = require('dns');

router.get('/:shortUrl', (req, res) => {
  let shortUrl = req.params.shortUrl;

  //find shortUrl and redirect
  db.Url.findOne({ shortUrl })
    .then((url) => {
      if(url) {
        let { originalUrl } = url;      
        res.redirect(`${originalUrl}`)
      } else {
        res.status(404).json({"error":"invalid shortURL"});
      }
    })
    .catch((err) => res.send(`Oops, something went wrong -> ${err}`));
});

router.post('/new', (req, res) => {
  let originalUrl = req.body.url;
  let regex = /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/; //regex to validate url

  // dns.lookup('www.google.com.au/imghp', (err, address, family) => {
  //   console.log(`${address} -:- ${family}`);
  // });
  
  //check if its a valid url
  if(originalUrl.search(regex) > -1) {
    //check if url exist
    db.Url.find({ originalUrl })
          .then((url) => {
            // if exists 
            if(url.length) {
              let { originalUrl, shortUrl } = url[0];
              res.status(201).json({ originalUrl, shortUrl });
            }
            else {
              db.Url.find()
                .then((urls) => { 
                  let shortUrl = urls.length + 1;
                  let data = {
                    originalUrl,
                    shortUrl
                  }
                  //add url      
                  return db.Url.create(data);
                })
                .then((newUrl) => {
                  let { originalUrl, shortUrl } = newUrl;
                  res.status(201).json({ originalUrl, shortUrl })
                })
                .catch((err) => res.send(`Oops, something went wrong -> ${err}`));
            }
          })
          .catch((err) => res.send(`Oops, something went wrong -> ${err}`));
  } else {
    res.status(404).json({"error":"invalid shortURL"});
  }
});

module.exports = router;
