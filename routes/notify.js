var express = require('express');
var router = express.Router();

/* GET notify status. */
router.get('/', function(req, res, next) {
  console.log('Sending your email here');
  res.send('Notified');
});

module.exports = router;
