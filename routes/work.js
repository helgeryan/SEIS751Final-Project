var express = require('express');
var router = express.Router();

/* GET about page. */
router.get('/', function(req, res, next) {
  res.render('work', { title: 'Work Under Radar' });
});

module.exports = router;
