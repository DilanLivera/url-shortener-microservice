const express = require('express');
const router = express.Router();
const db = require("../models");

router.get('/:id', (req, res) => {
  res.send(`You requested URL for ${req.params.id}`);
});

router.post('/new', (req, res) => {
  res.json(req.body);
  // res.send(`You just post to /api/shorturl/new - ${req.body}`);
  // db.Url.create(req.body)
  //   .then((newTodo) => res.status(201).json(newTodo))
  //   .catch((err) => res.send(`Oops, something went wrong -> ${err}`))
});

module.exports = router;