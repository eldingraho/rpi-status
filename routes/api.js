var express = require('express');
var os = require('os');
var router = express.Router();
var fs = require('fs');

/* GET api listing. */
router.get('/', function(req, res, next) {
  res.send(os.cpus())
})

router.get('/on', functiono(req, res, next) {
  fs.writeFileSync('/sys/class/gpio/gpio4/value', 0);
  res.send('on')
})

router.get('/off', functiono(req, res, next) {
  fs.writeFileSync('/sys/class/gpio/gpio4/value', 0);
  res.send('off')
})


module.exports = router;
