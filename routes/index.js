var express = require('express');
const blogspot = require('../db/schema');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  blogspot({title: "My name is fasunle"}).save();
  res.render('index', { title: 'Express' });
});

module.exports = router;
