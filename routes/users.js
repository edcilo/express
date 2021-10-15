var express = require('express');
var router = express.Router();
var User = require('../models/user')

/* GET users listing. */
router.get('/', function(req, res, next) {
  User.create({ username: 'Jhon Doe' }, function (err, user) {
    if (err) {
      console.error(err);
    } else {
      console.log('edc>>>', user._id);
    }
  });


  User.find()
    .limit(5)
    .sort({ username: -1 })
    .exec(function (err, users) {
      if (err) return handleError(err);
      console.log(users)
    });

  res.send('respond with a resource');
});

module.exports = router;
