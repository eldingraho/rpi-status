var express = require('express');
var os = require('os');
var fs = require('fs');
var router = express.Router();


/* GET api listing. */
router.get('/', function(req, res, next) {
  res.send(os.cpus())
});

router.get('/on', function(req, res, next) {
  fs.writeFileSync('/sys/class/gpio/gpio4/value', 0);
  res.send('on');
});

router.get('/off', function(req, res, next) {
  fs.writeFileSync('/sys/class/gpio/gpio4/value', 1);
  res.send('off')
});


module.exports = router;
