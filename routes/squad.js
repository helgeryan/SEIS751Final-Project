var express = require('express');
var router = express.Router();

/* GET squad page. */
router.get('/', function(req, res, next) {
  res.render('squad', { title: 'LFC Players' });
});

module.exports = router;
