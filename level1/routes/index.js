const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'CYBERJUTSU TASKLIST' });
});

router.get('/search', function(req, res, next) {
  res.render('index', { title: 'CYBERJUTSU TASKLIST' });
});

module.exports = router;
