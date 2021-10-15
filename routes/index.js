var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/test', function(req, res) {
  res.json({
    title: 'test',
    version: '0.0.1'
  });
})

module.exports = router;
