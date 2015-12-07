var express = require('express');
var router = express.Router();
//require mongo
var mongo = require('../data/mongo');

/* GET users listing. */
router.post('/', function(req, res) {
  var applicant = req.body;
  console.log('applicant:', applicant);
  //console.log('after converted to person', personObject);

  //when the user route is requested, post the request body
  //to the applicants collection in the mongo database.
  var results = mongo.applicants.insert(applicant);
  console.log(results);
  res.send(results);
});

module.exports = router;