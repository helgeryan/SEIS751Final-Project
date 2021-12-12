var express = require('express');
var router = express.Router();

/* GET about page. */
router.get('/', function(req, res, next) {
  res.render('about', { title: 'About Under Radar' });
});

/* GET credits page. */
router.get('/credits', function(req, res, next) {
  res.render('credits', { title: 'Credits' });
});

/* GET contentmap page. */
router.get('/contentmap', function(req, res, next) {
  res.render('contentmap', { title: 'Content Map' });
});

/* GET walkthrough page. */
router.get('/walkthrough', function(req, res, next) {
  res.render('walkthrough', { title: 'Walkthrough' });
});

/* GET wireframe page. */
router.get('/wireframe', function(req, res, next) {
  res.render('wireframe', { title: 'Wireframe' });
});


module.exports = router;
