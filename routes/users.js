var express = require('express');
var router = express.Router();
var mongo = require('../data/mongo');

/* GET users listing. */
router.get('/', function(req, res, next) {
  console.log('Is the get request getting through?');
  var applicantArray = [];
  applicantArray.push(req.body);
  var results = mongo.applicants.insert(applicantArray);
  res.send(results);
});

module.exports = router;