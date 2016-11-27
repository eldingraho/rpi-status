var express = require('express');
var os = require('os');
var router = express.Router();

/* GET api listing. */
router.get('/', function(req, res, next) {
  res.send(os.cpus());
});

module.exports = router;